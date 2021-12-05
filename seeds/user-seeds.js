const { User } = require('../models');

const userData = [
    {
        username: "EMtheDM",
        password: "password"
    },
    {
        username: "pei",
        password: "12345678"
    },
    {
        username: "jontheman",
        password: "abcdefgh"
    },
    {
        username: "laurel",
        password: "howdopasswordswork?"
    }
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
});

module.exports = seedUser;