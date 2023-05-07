const yargs = require('yargs');

const notes = require('./notes');

yargs.version('0.0.1');

yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string',
    },
    description: {
      describe: 'note content',
      demandOption: true,
      type: 'string',
    },
  },
  handler({ title, description }) {
    notes.addNote(title, description);
  },
});

yargs.command({
  command: 'remove',
  describe: 'remove an existing note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler({ title }) {
    notes.removeNote(title);
  },
});

yargs.command({
  command: 'list',
  describe: 'list existing notes',
  handler() {
    notes.listNotes();
  },
});

yargs.command({
  command: 'read',
  describe: 'read an existing note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string',
    },
  },

  handler({ title }) {
    notes.readNote(title);
  },
});

yargs.parse();

// const cmd = console.log(yargs.argv);
