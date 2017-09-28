import sassMiddleware from 'node-sass-middleware';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import config from './config';

import Animals from './src/server/routes/Animals';

mongoose.connect(config.mongodbUri);
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());

app.use(sassMiddleware({
  src: path.join(__dirname, '/src/client', 'sass'),
  dest: path.join(__dirname, 'public')
}));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/api/animals', new Animals().routes);

module.exports = app;
