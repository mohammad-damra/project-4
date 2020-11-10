const express = require('express');
const mainRouter = express.Router();
const {getAllPosts,createNewPost} = require('../controllers/main-controller');

mainRouter.get('/posts', getAllPosts);
mainRouter.post('/posts', createNewPost);
module.exports = mainRouter;