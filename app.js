import express from 'express';
import mongoose from 'mongoose';
import pug from 'pug';
import path from 'path';
import mainRouter from './routes/main.js';
import guestRouter from './routes/guests.js';
import replyRouter from './routes/reply.js';

const __dirname = path.resolve(path.dirname('.'));
const staticDirectory = path.resolve(__dirname, 'public');
const SERVER_PORT = process.env.SERVER_PORT || 3000;

const startServer = async () => {
  mongoose.Promise = global.Promise;

  //  in Terminal => export DB_URL='mongodb://localhost/rsvp'
  await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
  console.log('success!');
  const app = express();
  app.set('view engine', 'pug');
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(staticDirectory));

  app.use('/', mainRouter);
  app.use('/guests', guestRouter);
  app.use('/reply', replyRouter);

  app.listen(SERVER_PORT, () =>
    console.log(`Server started on port ${SERVER_PORT}`)
  );
};

try {
  startServer();
} catch (err) {
  console.log('Server Crashed!', err);
}
