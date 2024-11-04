import {React, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { getAllArticles } from '../utils/api-requests'

export default function Homepage (){

    const [listOfArticles, setListOfArticles] = useState([])
    
    useEffect(() => {
        getAllArticles()
            .then(({ articles }) => {
                console.log(articles)
                setListOfArticles(articles)
            })
    }, [])
    
    return (
        <>
        <ul className="articles-list">
            {listOfArticles.map((article) => {
                return <div className="article-card" key={article.article_id} >
                        <div className="articles-card-item-vote-background"></div>
                        <div className="articles-card-item1">
                            <a className="articles-card-item1-title">{article.title} </a>
                            <a className="articles-card-item1-author">by {article.author}</a>
                        </div>                        
                        <div className="articles-card-item-time-stamp">
                            <p>{article.created_at}</p>
                        </div>
                        <div className="articles-card-item-comment-count">
                            <p>Comment count: {article.comment_count}</p>
                        </div>
                        <div className="articles-card-item-vote-count">
                            <p>Votes:</p><p>{article.votes}</p>
                        </div>
                        <div className="articles-card-item-topic">
                            <p>kp/{article.topic}</p>
                        </div>
                        <div className="articles-card-item-body">
                            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining  ... {article.body}</div>
                        </div>
                </div>
            })}
        </ul>
        </>
    )
}