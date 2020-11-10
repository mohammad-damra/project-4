const posts = [
    {
    title: 'eat fried chicken',
    body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    author: 'jouza',
    },
    {
    title: 'how to studey react',
    body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    author: 'abd',
    },
    {
    title: 'how to vote',
    body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
    author: 'amr',
    },
    ];
let last_ID=3;
const getAllPosts = (req, res) => {
    res.json(posts);
  };
  const createNewPost = (req, res) => {
    posts.push(req.body);
    res.json(posts);
  };

  module.exports= {
    getAllPosts,
    createNewPost,
    last_ID
  };