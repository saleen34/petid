import mongoose from 'mongoose';

import config from '../config';
import app from './app';

/* eslint-disable no-console */

app.listen(config.port, config.host, () => {
  console.log('Server is listening on ', config.port);
  mongoose.connect(config.mongodbUrl, { useMongoClient: true });
  mongoose.Promise = global.Promise;
  const db = mongoose.connection;
  db.on('error', () => { console.log('FAILED to connect to mongoose'); });
  db.once('open', () => {
    console.log('Connected to mongoose');
  });
});
