const { User } = require('../models');

const userData = [{
        username: 'Eric',
        password: '12345'
    },
    {
        username: 'Jon',
        password: '12345'
    },
    {
        username: 'Katlyn',
        password: '12345'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;