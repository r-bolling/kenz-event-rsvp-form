import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('main', { title: 'Event RSVP Form' });
});

export default router;
