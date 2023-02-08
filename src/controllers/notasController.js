import {NotaCreate} from '../service/notaService.js';


export const createNota = async (req, res) => {
  const {title, body} = req.body;
  const userId = req.userId;

  try{

    if(!title || !body){
      return res.status(400).send({error: 'Dados inválidos'});
    }

    const nota = await NotaCreate(title, body, userId);

    return res.send(nota);
  }
  catch(err){
    console.log(err);
    res.status(500).send({error: 'Erro ao criar nota'});
  }
}