import config from './config';
import app from './app';

app.listen(config.port, config.host, () => {
  console.log('Server is listening on ', config.port);
});
