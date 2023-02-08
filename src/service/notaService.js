import Nota from '../models/Notes.js';

export const NotaCreate = async (title, body, userId) => {
  const nota = await Nota.create({
    title,
    body,
    author: userId,
  });
  return nota;
}