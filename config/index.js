const config = {
  port: 8080,
  host: '127.0.0.1',
  get serverUrl () {
    return `http://${this.host}:${this.port}`;
  },
  mongodbUri: 'mongodb://localhost:27017/pet'
};

module.exports = config;
