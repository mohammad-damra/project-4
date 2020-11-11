const articles = [
  {
    id: 1,
    title: "eat fried chicken",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "jouza",
  },
  {
    id: 2,
    title: "how to studey react",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "abd",
  },
  {
    id: 3,
    title: "how to vote",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    author: "amr",
  },
];
let last_ID = 3;
const getAllArticles = (req, res) => {
  res.json(articles);
};
const createNewArticle = (req, res) => {
  req.body.id = ++last_ID;
  posts.push(req.body);
  res.json(articles);
};
const deleteArticleByID = (req, res) => {
  posts.pop();
  res.json(articles);
};
const changeArticleTitle = (req, res) => {
  res.json(articles);
};

module.exports = {
  getAllArticles,
  createNewArticle,
  deleteArticleByID,
  changeArticleTitle,
};
