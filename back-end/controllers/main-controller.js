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

const getAllPosts = (req, res) => {
    res.json(posts);
  };

  module.exports= {
    getAllPosts
  };