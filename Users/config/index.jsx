const env = process.env;

const config = {
  port: env.PORT || 3000,
  host: env.HOST || '127.0.0.1',
  mongodbUrl: 'mongodb://localhost:27017/pet'
};

module.exports = config;
