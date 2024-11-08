import React, {useState, useEffect } from 'react'
import CommentCard from './CommentCard'
import { getComments } from '../utils/api-requests'


export default function CommentsList({ article_id, commentPosted, setCommentPosted}){

    const [listOfComments, setListOfComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [commentDeleted, setCommentDeleted] = useState(false)

    useEffect(() => {
        setCommentDeleted(false)
        setCommentPosted(false)
        setIsLoading(true)
        getComments(article_id)
            .then(({ comments }) => {
                setListOfComments(comments)
                setIsLoading(false)
            })

    }, [commentDeleted, commentPosted])

    if(isLoading){
        return <h1 className="error-loading-messages">Loading...</h1>
    }

return (
    <ul className="comments-list">
        {listOfComments.map((comment) => {
            return <CommentCard comment={comment} setCommentDeleted={setCommentDeleted} key={comment.comment_id}/>
        })}
    </ul>)

}