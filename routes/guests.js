import express from 'express';
import { GuestsModel } from '../models/index.js';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const guests = await GuestsModel.find();
    res.render('guests', { title: 'Guest List', guests: guests });
  } catch (err) {
    console.log('Error!', err);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
