const express = require('express');
const postsRouter = require('./data/posts-router')
const server = express();

server.use(express.json());
server.use('/api/posts', postsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Hobbit story time!</h2>`)
})

module.exports = server;