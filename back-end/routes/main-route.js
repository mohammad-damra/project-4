const express = require('express');
const mainRouter = express.Router();
const {getAllArticles,createNewArticle,deleteArticleByID,changeArticleTitle} = require('../controllers/main-controller');

mainRouter.get('/articles', getAllArticles);
mainRouter.post('/articles', createNewArticle);
mainRouter.delete('/articles/:id', deleteArticleByID);
mainRouter.put('/articles/:id/:newTitle', changeArticleTitle);
module.exports = mainRouter;