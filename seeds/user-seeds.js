const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
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

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;