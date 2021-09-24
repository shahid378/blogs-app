const express = require('express');
const blogRouter = require('.//src/routers/blogRouter');

const port = 3000;
const app = express();
app.use(express.json());
app.use(blogRouter);

app.listen(port, () => {
    console.log('Server started .. ');
});