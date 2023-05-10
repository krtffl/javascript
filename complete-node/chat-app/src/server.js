const path = require('path');

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);

const port = process.env.PORT || 3000;
const public = path.join(__dirname, '../public');

app.use(express.static(public));

io.on('connection', (socket) => {
  console.log('socket connection');

  socket.on('join', ({ username, room }) => {
    socket.join(room);

    socket.emit('message', 'welcome');
    socket.broadcast
      .to(room)
      .emit('message', `${username} has joined the room`);
  });

  socket.on('sendMessage', (msg, location, callback) => {
    console.log(`received ${msg} from ${location}`);

    if (!location) {
      callback('no location was provided');
      return;
    }
    io.emit('message', msg);
    callback();
  });

  socket.on('disconnect', () => {
    io.emit('message', 'a user has left');
  });
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
