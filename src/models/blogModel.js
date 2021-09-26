const mongoose = require('mongoose');

//create schema for documents
const blogSchema = new mongoose.Schema({
    title: {
        type: 'string',
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: 'string',
    },
    authorName:{
        type: 'string'
    }
    
});

//middleware for blogs model



//create model(collection) for db to store all documents
const Blog=new mongoose.model("blogs",blogSchema);

module.exports = Blog;