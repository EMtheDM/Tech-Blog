const { Comment } = require('../models');

const commentData = [{
        comment_text: 'I play video games....a lot!',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'My favorite video game is Zelda: Ocarina of Time!',
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: 'Nintendo makes the best video games!',
        user_id: 3,
        post_id: 1
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;