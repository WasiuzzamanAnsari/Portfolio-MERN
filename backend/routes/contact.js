import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({ error: 'All fields required' });

  try {
    const saved = await Contact.create({ name, email, message });
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

export default router;
