const { User } = require('../models');

const userData = [
    {
        username: 'Eric',
        password: 'password1'
    },
    {
        username: 'Jon',
        password: 'password2'
    },
    {
        username: 'Katlyn',
        password: 'password3'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;