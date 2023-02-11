import {
  NotaCreate,
  getNotaUser,
  getNotesUser,
} from "../service/notaService.js";

export const createNota = async (req, res) => {
  const { title, body } = req.body;
  const userId = req.userId;

  try {
    if (!title || !body) {
      return res.status(400).send({ error: "Dados inválidos" });
    }

    const nota = await NotaCreate(title, body, userId);

    return res.send(nota);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Erro ao criar nota" });
  }
};

export const getNota = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    if (!id) {
      return res.status(400).send({ error: "Dados inválidos" });
    }

    const note = await getNotaUser(id);

    if (userId != note.author.toString()) {
      return res.status(401).send({ error: "Não autorizado" });
    }

    return res.send(note);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Erro ao buscar nota" });
  }
};

export const getNotes = async (req, res) => {
  try {
    const userId = req.userId;

    const notes = await getNotesUser(userId);

    return res.send(notes);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Erro ao buscar notas" });
  }
};

export const updateNota = async (req, res) => {
  try {
    const userId = req.userId;
    const { id } = req.params;
    const { title, body } = req.body;
    [];

    if (!title || !body || !id) {
      return res.status(400).send({ error: "Dados inválidos" });
    }

    const note = await getNotaUser(id);

    if (userId != note.author.toString()) {
      return res.status(401).send({ error: "Não autorizado" });
    }

    note.title = title;
    note.body = body;

    await note.save();

    return res.send(note);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Erro ao atualizar nota" });
  }
};

export const deleteNota = async (req, res) => {
  try {
    const userId = req.userId;
    const { id } = req.params;

    if (!id) {
      return res.status(400).send({ error: "Dados inválidos" });
    }

    const note = await getNotaUser(id);

    if (userId != note.author.toString()) {
      return res.status(401).send({ error: "Não autorizado" });
    }

    await note.remove();

    return res.send({ message: "Nota removida com sucesso" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Erro ao remover nota" });
  }
};

export const searchNotes = async (req, res) => {
  try {
    const userId = req.userId;
    const { search } = req.query;

    const notes = await getNotesUser(userId);

    const notesFilter = notes.filter(
      (note) => note.title.includes(search) || note.body.includes(search)
    );

    if (notesFilter.length == 0) {
      return res.status(200).send({ message: "Nenhuma nota Coresponde" });
    }
/* fazer if ternario para que seja mais de um seja notas e so mentente uma seja nota  */
    const length = notesFilter.length > 1 ? "notas" : "nota";
    const perPage = `Foram encrotradas ${notesFilter.length} ${length}`;

    return res.send({
      notesFilter,
      perPage,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Erro ao buscar notas" });
  }
};
