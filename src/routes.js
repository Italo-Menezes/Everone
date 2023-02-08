import express from 'express';
const router = express.Router();

import {register, login} from './controllers/userController.js';
import {createNota, getNota} from './controllers/notasController.js';
import {authMIddleware} from './middlewares/jwt.js';

/* user */
router.post('/register', register);
router.post('/login', login);

/* notas */
router.post('/notes',authMIddleware, createNota)
router.get('/notes/:id', authMIddleware, getNota);


export default router;