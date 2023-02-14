import Nota from '../models/Notes.js';

export const NotaCreate = async (title, body, userId) => {
  const nota = await Nota.create({
    title,
    body,
    author: userId,
  });
  return nota;
}

export const getNotaUser = async (id) => {
  const note = await Nota.findById(id)
  return note;
}

export const getNotesUser = async (userId) => {
  const notes = await Nota.find({author: userId})

  return notes;
}




