const express = require('express');
const mainRouter = express.Router();
const {getAllPosts} = require('../controllers/main-controller');

mainRouter.get('/posts', getAllPosts);

module.exports = mainRouter;