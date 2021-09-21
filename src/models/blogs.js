const mongoose = require('mongoose');

const Blog = mongoose.model('Blog', {
    title: {
        type: 'string',
    },
    description: {
        type: String
    }
    
});

module.exports = Blog;