const config = {
  production: {
    port: 3000,
    host: '127.0.0.1',
    mongodbUrl: 'mongodb://localhost:27017/pet'
  },
  default: {
    port: 3000,
    host: '127.0.0.1',
    mongodbUrl: 'mongodb://localhost:27017/test'
  }
};

module.exports = (process.env.NODE_ENV === 'production') ? config.production : config.default;
