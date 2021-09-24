const mongoose = require('mongoose');

//create schema for documents
const blogSchema =new mongoose.Schema({
    title: {
        type: 'string',
    },
    description: {
        type: String
    }
    
});

//create model(collection) for db to store all documents
const Blog=new mongoose.model("blogs",blogSchema);

module.exports = Blog;