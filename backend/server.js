import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/db.js';
import Contact from './models/Contact.js';
import contactRoutes from './routes/contact.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/contact', contactRoutes);

const start = async () => {
  try {
    await db.authenticate();
    await Contact.sync();
    app.listen(process.env.PORT, () =>
      console.log(`Server running on http://localhost:${process.env.PORT}`)
    );
  } catch (err) {
    console.error('DB Error:', err.message);
  }
};

start();
