const express = require('express');
const Blog = require('../models/blog');
require('../db/connect');

const router = new express.Router();

router.post('/blog', async (req, res) => {
    try {
        const blog = new Blog(req.body);
        const doc = await blog.save();
        res.status(201).send(doc);
    } catch (e) {
        res.status(500).send('Not created');
    }
});

// GET localhost:300/blog
router.get('/blog', async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.status(200).send(blogs);
    } catch (e) {
        res.status(500).send();
    }
});

router.delete('/blog/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Blog.findByIdAndDelete(id);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send('Unable to delete');
    }
});

router.patch('/blog/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await Blog.findByIdAndUpdate(id, req.body);
        if (!blog) {
            return res.status(404).send();
        }
        return res.status(200).send(blog);
    } catch (e) {
        return res.status(500).send();
    }
});

module.exports = router;