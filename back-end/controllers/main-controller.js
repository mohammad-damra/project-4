let articles = [
  {
    id: 1,
    title: "eat fried chicken",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "jouza",
  },
  {
    id: 4,
    title: "how to studey react",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "amr",
  },
  {
    id: 7,
    title: "how to vote",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    author: "jouza",
  },
];
let last_ID = 7;
const getAllArticles = (req, res) => {
  res.json(articles);
};
const createNewArticle = (req, res) => {
  req.body.id = ++last_ID;
  posts.push(req.body);
  res.json(articles);
};
const changeArticleTitle = (req, res) => {
  for (let i = 0; i < articles.length; i++) {
    if (req.params.id == articles[i].id) {
      articles[i].title = req.params.newTitle;
    }
  }
  res.json(articles);
};
const changeArticleAuthorById = (req, res) => {
  for (let i = 0; i < articles.length; i++) {
    if (req.params.id == articles[i].id) {
      articles[i].author = req.body.newAuthor;
    }
  }
  res.json(articles);
};
const deleteArticleByID = (req, res) => {
  for (let i = 0; i < articles.length; i++) {
    if (req.params.id == articles[i].id) {
      articles.splice(i, 1);
    }
  }
  res.json(articles);
};
/*const deleteArticleByAuthor = (req, res) => {
  for (let i = 0; i < articles.length; i++) {
    if (req.body.author === articles[i].author) {
      articles.splice(i, 1);
       i--;
    }
  }
  res.json(articles);
};*/
const deleteArticleByAuthor = (req, res) => {
  articles = articles.filter(({ author }) => author !== req.body.author);
  res.json(articles);
};
module.exports = {
  getAllArticles,
  createNewArticle,
  changeArticleTitle,
  changeArticleAuthorById,
  deleteArticleByID,
  changeArticleTitle,
  deleteArticleByAuthor,
};
