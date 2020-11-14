const express = require("express");
const mainRouter = express.Router();
const {
  getAllArticles,
  createNewArticle,
  changeArticleTitle,
  changeArticleAuthorById,
  deleteArticleByID,
  deleteArticleByAuthor,
} = require("../controllers/main-controller");

mainRouter.get("/articles", getAllArticles);
mainRouter.post("/articles", createNewArticle);
mainRouter.delete("/articles/:id", deleteArticleByID);
mainRouter.put("/articles/:id/:newTitle", changeArticleTitle);
mainRouter.put("/articles/:id", changeArticleAuthorById);
mainRouter.delete("/articles", deleteArticleByAuthor);
module.exports = mainRouter;
