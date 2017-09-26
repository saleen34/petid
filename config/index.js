const env = process.env;

const config = {
  port: env.PORT || 8080,
  host: env.HOST || '192.168.0.128',
  get serverUrl () {
    return `http://${this.host}:${this.port}`;
  },
  mongodbUri: 'mongodb://localhost:27017/test'
};

module.exports = config;
