import express from 'express';
const router = express.Router();

import {register, login} from './controllers/userController.js';
import {createNota} from './controllers/notasController.js';
import {authMIddleware} from './middlewares/jwt.js';

/* user */
router.post('/register', register);
router.post('/login', login);

/* notas */
router.post('/notes',authMIddleware, createNota)


export default router;