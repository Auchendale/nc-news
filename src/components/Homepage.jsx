import React, {useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { getAllArticles, patchArticle } from '../utils/api-requests'

export default function Homepage (){

    const [listOfArticles, setListOfArticles] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [voteChange, setVoteChange] = useState(false)
    
    useEffect(() => {
        setIsLoading(true)
        setVoteChange(false)
        getAllArticles()
            .then(({ articles }) => {
                setListOfArticles(articles)
                setIsLoading(false)
            })
            .catch((err) => {
                setIsError(true)
            })
    }, [voteChange])
    
    function handleVote(event){
        event.preventDefault()
        patchArticle(event.target.value.split(','))
            .then(({ article }) => {
                setVoteChange(true)
            })
    }

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
                <Link to={`/article/${article.article_id}`} style={{textDecoration:'none', color:'inherit'}} >
                    <article className="article-card" key={`${article.author}.${article.article_id}`}>
                        <p className="articles-card-item1">
                            <a className="articles-card-item1-title">{article.title} </a>
                            <a className="articles-card-item1-author">by {article.author}</a>
                        </p>                        
                        <p className="articles-card-item-time-stamp">{article.created_at.split('T')[0]}</p>
                        <p className="articles-card-item-comment-count">Comments: {article.comment_count}</p>
                        <p className="articles-card-item-topic">kp/{article.topic}</p>
                        <div className="articles-card-item-vote-background"></div>
                        <p className="articles-card-item-vote-count">
                            <a >Votes:</a> <a>{article.votes}</a>
                        </p>
                    </article>
                </Link>
                <div className="article-card-vote-buttons">
                    <button className="upvote-button" onClick={handleVote} value={[1, article.article_id]}>+1 </button>
                    <button className="downvote-button" onClick={handleVote} value={[-1, article.article_id]}>-1</button>
                </div>
                </>
            })}
        </ul>
        </>
    )
}