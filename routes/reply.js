import express from 'express';
import { GuestsModel } from '../models/index.js';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const guest = new GuestsModel(req.body);
    await guest.save();
    res.render('reply', { title: 'Form Submitted!' });
  } catch (err) {
    console.log('Error!', err);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
