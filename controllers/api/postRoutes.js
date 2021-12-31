const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.get('/:id', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
        return;
    }

    try {
        const dbPostData = await Post.findByPk(req.params.id);
        const post = dbPostData.get({ plain: true });

        req.session.post_id = post.id;
        res.json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/edit/:id', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
        return;
    }

    try {
        const dbPostData = await Post.update({
            post_title: req.body.post_title,
            post_content: req.body.post_content
        },
        {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(dbPostData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/comment', async (req, res) => {
    try {
        const newComment = await Comment.create({
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            post_id: req.session.post_id
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        });
        
        if (!postData) {
            res.status(404).json({ message: 'No post found with this ID!' });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;