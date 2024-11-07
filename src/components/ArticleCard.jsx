import React, {useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { patchArticle } from '../utils/api-requests'

export default function ArticleCard({ article }){

    const [votesCount, setVotesCount] = useState(0);

    useEffect(() => {
        setVotesCount(article.votes)
    }, [])

    function handleVote(event){
        const num = Number(event.target.value)
        setVotesCount((a) => a + num)
        patchArticle([num, article.article_id])
    }

    return <>
    <Link to={`/article/${article.article_id}`} style={{textDecoration:'none', color:'inherit'}}>
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
                <a >Votes:</a> <a>{votesCount}</a>
            </p>
        </article>
    </Link>
    <div className="article-card-vote-buttons">
        <button className="upvote-button" onClick={handleVote} value={1}>+1 </button>
        <button className="downvote-button" onClick={handleVote} value={-1}>-1</button>
    </div>
    </>

}