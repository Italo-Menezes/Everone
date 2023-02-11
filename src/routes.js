import express from 'express';
const router = express.Router();

import {register, login} from './controllers/userController.js';
import {createNota, getNota, getNotes,updateNota, deleteNota, searchNotes} from './controllers/notasController.js';
import {authMIddleware} from './middlewares/jwt.js';

/* user */
router.post('/register', register);
router.post('/login', login);

/* notas */
router.get('/notes/' ,authMIddleware, getNotes )
router.get('/notes/search',authMIddleware, searchNotes ) 
router.get('/notes/:id', authMIddleware, getNota);
router.post('/notes/',authMIddleware, createNota)
router.put('/notes/:id', authMIddleware, updateNota);
router.delete('/notes/:id', authMIddleware, deleteNota);


export default router;