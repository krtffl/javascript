const fs = require('fs');

const NOTES_FILE = 'notes.json';

const addNote = (title, description) => {
  const notes = loadNotes();
  const duplicate = notes.find((note) => note.title === title);

  if (duplicate) {
    console.log(`note with title ${duplicate.title} already exists`);
    return;
  }

  notes.push({
    title,
    description,
  });

  saveNotes(notes);
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length === notesToKeep.length) {
    console.log(`no note found with title ${title}`);
    return;
  }

  saveNotes(notesToKeep);
  console.log(`note ${title} removed!`);
};

const listNotes = () => {
  const notes = loadNotes();
  const list = notes.map((note) => note.title);
  console.log(list);
};

const readNote = (title) => {
  const notes = loadNotes();
  const selectedNote = notes.find((note) => note.title === title);

  if (!selectedNote) {
    console.log(`no note found with title ${title}`);
    return;
  }

  console.log(`note -> ${selectedNote.title}`);
  console.log(selectedNote.description);
};

const loadNotes = () => {
  try {
    const buffer = fs.readFileSync(NOTES_FILE);
    const data = buffer.toString();
    return JSON.parse(data);
  } catch (e) {
    console.log(`loadNotes_ERROR: ${e}`);
    return [];
  }
};

const saveNotes = (notes) => {
  try {
    const data = JSON.stringify(notes);
    fs.writeFileSync(NOTES_FILE, data);
  } catch (e) {
    console.log(`saveNotes_ERROR: ${e}`);
  }
};

module.exports = { addNote, removeNote, listNotes, readNote };
