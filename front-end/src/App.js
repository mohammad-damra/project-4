import React, { useState } from 'react';
import NewItem from './components/NewItem';
import ArticleItem from './components/ArticleItem';
import './App.css';

import axios from 'axios';

export default function App() {
	const [ articles, setArticles ] = useState([]);

	const getAllArticles = () => {
		axios
			.get(`http://localhost:5000/articles`)
			.then((response) => {
				// console.log('RESPONSE: ', response);
				console.log('DATA: ', response.data);
				setArticles(response.data);
			})
			.catch((err) => {
				console.log('ERR: ', err);
			});
	};

	const renderArticles = articles.map((articleObj) => {
		return <ArticleItem article={articleObj} getArticles={getAllArticles} />;
	});

	return (
		<div className="app">
			<h1>TODO LIST</h1>
			<button onClick={getAllArticles}>GET ARTICLES</button>
			<NewItem getArticles={getAllArticles} />
			{renderArticles}
		</div>
	);
}

/* 
state
lifecyle methods

*/
/* 
axios
    .get(`http://localhost:5000/articles`)
    .then((response) => {
      console.log('result: ', response);
    })
    .catch((err) => {
      console.log('ERR: ', err);
    });
*/
