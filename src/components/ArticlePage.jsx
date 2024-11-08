import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getArticle, patchArticle, postComment } from '../utils/api-requests'
import { UserContext } from '../contexts/User'
import CommentsList from './CommentsList'

export default function articlePage(){

    const {article_id} = useParams()
    const [articleInfo, setArticleInfo] = useState([])
    const [articleTimeStamp, setArticleTimeStamp] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [votesCount, setVotesCount] = useState(0);
    const [commentBodyInput, setCommentBodyInput] = useState("")
    const {user, setUser} = useContext(UserContext)
    const [commentPosted, setCommentPosted] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getArticle(article_id)
            .then(({ article }) => {
                setArticleInfo(article[0]) 
                setVotesCount(article[0].votes)
                setArticleTimeStamp([article[0].created_at.split("T")[0], article[0].created_at.split("T")[1].split(".")[0]])
                setIsLoading(false)
            })
            .catch((err) => {
                setIsError(true)
            })
    }, [])


    function handleVote(event){
        const num = Number(event.target.value)
        setVotesCount((a) => a + num)
        patchArticle([num, article_id])
    }
    
    function handleTextChange(event){
        setCommentBodyInput(event.target.value)
    }

    function handleCommentPost(event){
        event.preventDefault()
        postComment(user, commentBodyInput, article_id)
            .then(() => {
                setCommentPosted(true)
                setCommentBodyInput("")
        })
    }

    if(isError){
        return <h1 className="error-loading-messages">Uh oh! Something went wrong lol</h1>
    }

    if(isLoading){
        return <h1 className="error-loading-messages">Loading...</h1>
    }

    return(
    <>
        <article className="article-page-card">
            <p className="article-title-author">
                <a className="article-title"> {articleInfo.title} </a>
                <a className="article-author"> by {articleInfo.author} </a>
            </p>
            <p className="article-body"> {articleInfo.body} </p>
            <div className="article-time-stamp">{articleTimeStamp[1]}, {articleTimeStamp[0]}</div>
            <p className="article-topic"> kp/{articleInfo.topic} </p>
            <figure className="article-img">
                <img src={articleInfo.article_img_url}></img> 
            </figure>
            <div className="article-page-vote-buttons">
                <p className="article-vote-count">Votes: {votesCount}</p>
                <button className="upvote-button" onClick={handleVote} value={1}>+1</button>
                <button className="downvote-button" onClick={handleVote} value={-1}>-1</button>
            </div>
        </article>
        
        <form >
            <fieldset className="comment-form">
                    <legend>Post a comment!</legend>
                    <textarea placeholder="Funny how? Funny like a clown? Funny like I amuse you?" onChange={handleTextChange} value={commentBodyInput}></textarea>
                    <button onClick={handleCommentPost}>Post!</button>
            </fieldset>
        </form>
        <div>
            <h1 className="comment-heading">Comments:</h1>
        </div>
        <CommentsList article_id={article_id} commentPosted={commentPosted} setCommentPosted={setCommentPosted}/>
    </>
    )
}