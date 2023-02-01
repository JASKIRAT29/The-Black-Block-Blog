const { User } = require('../models');

const userData = [
  {
    username: 'jaskirat',
    password: 'jazz7574'
  },
  {
    username: 'semir',
    password: 'semir'
  },
  {
    username: 'vimo',
    password: 'vimo'
  },
  {
    username: 'nicole',
    password: 'nicole6878'
  },
  {
    username: 'faisal',
    password: 'faisal'
  },
  {
    username: 'kirat',
    password: 'kirat65765'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
