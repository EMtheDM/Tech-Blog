const { Post } = require('../models');

const postData = [{
        post_title: 'Video Game Life',
        post_content: 'Video games are life. Period. Exclamation! There is nothing I would rather do than play video games.',
        user_id: 1
    },
    {
        post_title: 'I Need A Nap',
        post_content: 'I am so tired right now I could fall asleep at my desk.',
        user_id: 2
    },
    {
        post_title: 'I Need A Window',
        post_content: 'I am so bored but I do not have a window to look through.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;