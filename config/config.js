var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: '2hao'
    },
    port: 3001,
    db: 'mongodb://localhost/2hao-development'
  },

  test: {
    root: rootPath,
    app: {
      name: '2hao'
    },
    port: 3001,
    db: 'mongodb://localhost/2hao-test'
  },

  production: {
    root: rootPath,
    app: {
      name: '2hao'
    },
    port: 3001,
    db: 'mongodb://localhost/2hao-production'
  }
};

module.exports = config[env];
