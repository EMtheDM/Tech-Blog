const { Comment } = require('../models');

const commentData = [{
    comment_text: "Test comment 1.",
    userId: 1,
    postId: 1
},
{
    comment_text: "Test comment 2.",
    userId: 2,
    postId: 2
},
{
    comment_text: "Test comment 3.",
    userId: 3,
    postId: 3
},
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;