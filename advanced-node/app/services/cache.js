const mongoose = require('mongoose');
const redis = require('redis');
const util = require('util');

const redisUrl = 'redis://127.0.01:6379';
const client = redis.createClient(redisUrl);
client.hget = util.promisify(client.hget);
client.del = util.promisify(client.del);

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function (opts = {}) {
  this.useCache = true;
  this.hashKey = JSON.stringify(opts.key || '');
  return this;
};

mongoose.Query.prototype.exec = async function () {
  if (!this.useCache) {
    return exec.apply(this, arguments);
  }

  const key = JSON.stringify(
    Object.assign({}, this.getQuery(), {
      collection: this.mongooseCollection.name,
    })
  );

  const cache = await client.hget(this.hashKey, key);

  if (cache) {
    const doc = JSON.parse(cache);

    return Array.isArray(doc)
      ? doc.map((d) => new this.model(d))
      : new this.model(doc);
  }

  const res = await exec.apply(this, arguments);

  client.hset(this.hashKey, key, JSON.stringify(res), 'EX', 10);

  return res;
};

module.exports = {
  async clearHash(hashkey) {
    const res = await client.del(JSON.stringify(hashkey));
  },
};
