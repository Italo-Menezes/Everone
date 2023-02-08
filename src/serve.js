import express from 'express';
import db from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';

/* routes */
import routes from './routes.js';


/* config */
const app = express();
const port = process.env.PORT || 3000;
dotenv.config();
app.use(cors());
db();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

/* servidor */
app.use(routes);

/* serve */
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
