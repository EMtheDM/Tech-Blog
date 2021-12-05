const { Post } = require('../models');

const postData = [
    {
        postTitle: "Hello World",
        postContent: "Welcome to Earth!",
        userId: 1
    },
    {
        postTitle: "Javascript Thoughts",
        postContent: "Javasript is the most fun language.",
        userId: 2
    },
    {
        postTitle: "Bootcamps Rule",
        postContent: "Bootcamps are a fun way to learn how to code.",
        userId: 3
    },
    {
        postTitle: "University of Denver",
        postContent: "The University of Denver has a fantastic bootcamp for folks to join.",
        userId: 4
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;