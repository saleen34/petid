import sassMiddleware from 'node-sass-middleware';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import config from './config';
import MyRouter from './src/server/api';

const server = express();
const appRoutes = new MyRouter();

server.use(bodyParser.json());

server.use(sassMiddleware({
  src: path.join(__dirname, '/src/client', 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');
server.use(express.static('public'));

server.get('/', (req, res) => {
  res.render('index');
});

server.use('/api', appRoutes.routes);

server.listen(config.port, config.host, () => {
  console.log('Server is listening on ', config.port);
});
