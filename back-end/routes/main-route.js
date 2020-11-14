const express = require("express");
const mainRouter = express.Router();
const {
  getAllArticles,
  createNewArticle,
  changeArticleTitle,
  changeArticleAuthorById,
  deleteArticleByID,
  deleteArticleByAuthor,
  getAllArticlesByAuthor,
  changeArticleDescriptionById,
  recoverDeletedArticleByID
} = require("../controllers/main-controller");

mainRouter.get("/articles", getAllArticles);
mainRouter.post("/articles", createNewArticle);
mainRouter.delete("/articles/:id", deleteArticleByID);
mainRouter.put("/articles/:id/:newTitle", changeArticleTitle);
mainRouter.put("/articles/:id", changeArticleAuthorById);
mainRouter.delete("/articles", deleteArticleByAuthor);
//extra End points
mainRouter.get("/articlesByAuthor", getAllArticlesByAuthor);
mainRouter.put("/articlesDescription/:id", changeArticleDescriptionById);
mainRouter.delete("/recoverArticles/:id", recoverDeletedArticleByID);
module.exports = mainRouter;
