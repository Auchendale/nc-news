import React, {useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { getAllArticles } from '../utils/api-requests'

export default function Homepage (){

    const [listOfArticles, setListOfArticles] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setIsLoading(true)
        getAllArticles()
            .then(({ articles }) => {
                setListOfArticles(articles)
                setIsLoading(false)
            })
            .catch((err) => {
                setIsError(true)
            })
    }, [])
    
    if(isError){
        return <h1 className="error-loading-messages">Uh oh! Something went wrong lol</h1>
    }

    if(isLoading){
        return <h1 className="error-loading-messages">Loading...</h1>
    }

    return (
        <>
        <ul className="articles-list">
            {listOfArticles.map((article) => {
                return <>
                <Link to={`/article/${article.article_id}`} style={{textDecoration:'none', color:'inherit'}}>
                    <div className="article-card" key={`${article.author}.${article.article_id}`}>
                        <div className="articles-card-item-vote-background"></div>
                        <div className="articles-card-item1">
                            <a className="articles-card-item1-title">{article.title} </a>
                            <a className="articles-card-item1-author">by {article.author}</a>
                        </div>                        
                        <div className="articles-card-item-time-stamp">
                            <p>{article.created_at.split('T')[0]}</p>
                        </div>
                        <div className="articles-card-item-comment-count">
                            <p>Comments: {article.comment_count}</p>
                        </div>
                        <div className="articles-card-item-vote-count">
                            <p>Votes:</p><p>{article.votes}</p>
                        </div>
                        <div className="articles-card-item-topic">
                            <p>kp/{article.topic}</p>
                        </div>
                        {/* <div className="articles-card-item-img">
                            <img src={article.article_img_url}></img>
                        </div> */}
                        </div>
                        </Link>
                        </>
            })}
        </ul>
        </>
    )
}