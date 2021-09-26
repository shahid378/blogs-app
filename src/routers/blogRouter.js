const express = require('express');
const Blog = require('../models/blogModel');
require('../db/connect');
const auth= require('../middleware/auth');

const router = new express.Router();

router.post('/blog',auth, async (req, res) => {
    try {
        //console.log(req.body);
        req.body.author = req.user._id;
        req.body.authorName = req.user.name;
        const blog = new Blog(req.body);
        const doc = await blog.save();
        //console.log(doc);
        res.status(201).send(doc);
    } catch (e) {
        res.status(500).send('Not created');
    }
});

// GET localhost:300/blog
router.get('/blog',auth, async (req, res) => {
    try {
        const blogs = await Blog.find({author: req.user.id});
        res.status(200).send(blogs[0]);
    } catch (e) {
        res.status(500).send();
    }
});

router.delete('/blog/:id',auth, async (req, res) => {
    try {
        const result = await Blog.findOneAndDelete({id: req.params.id,author: req.user.id });
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send('Unable to delete');
    }
});

router.patch('/blog/:id',auth, async (req, res) => {
    try {
        const blog = await Blog.findOneAndUpdate({ id: req.params.id, author: req.user.id }, req.body, {new: true});
        if (!blog) {
            return res.status(404).send();
        }
        return res.status(200).send(blog);
    } catch (e) {
        return res.status(500).send();
    }
});

module.exports = router;