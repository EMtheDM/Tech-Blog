const { Post } = require('../models');

const postData = [{
        title: 'I Need Caffeine',
        content: 'I am so tired right now I need a shot of caffeine.',
        user_id: 1
    },
    {
        title: 'I Need A Nap',
        content: 'I am so tired right now I could fall asleep at my desk.',
        user_id: 2
    },
    {
        title: 'I Need A Window',
        content: 'I am so bored but I do not have a window to look through.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;