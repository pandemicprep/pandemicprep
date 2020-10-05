import React, { useState, useEffect } from 'react';

import './News.css';

import { fetchNews } from '../../../../api'

export const News = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchNews()
            .then((response) => {
                console.log(response)
                setArticles(response.news);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])

    return (
        <div id='all-news'>
            {articles.map((article, index) => {
                return (
                    <div key={index}>
                        <div className='news-container' >
                            <h2 className='news-title'>
                                <a className='news-title' target='_blank' href={article.url}>{article.title}</a>
                            </h2>

                            <span className='news-author'>{article.author}</span>

                            <div className='news-date'>{article.published}</div>

                            <div className='news-image'>
                                <a target='_blank' href={article.url}><img className='news-image' src={article.image} alt={article.title}></img></a>
                            </div>

                            <div className='news-description'>{article.description}</div>
                            <h2 id="line">______________________________________________</h2>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}
