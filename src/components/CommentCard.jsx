import React, {useContext, useState } from 'react'
import { deleteComment } from '../utils/api-requests'
import { UserContext } from '../contexts/User'


export default function CommentCard({ comment, setCommentDeleted }){

    const {user, setUser} = useContext(UserContext)
    const [disabledSwitch, setDisabledSwitch] = useState(false)


    function handleDelete(event){
        event.preventDefault()
        setDisabledSwitch(true)
        deleteComment(event.target.value).then(() => {
            setCommentDeleted(true)
        })
    }

    return(
        <article className="comment-card" >
            <div className="comment-card-item-vote-background"></div>
            <p className="comment-card-author"> {comment.author} </p>
            <p className="comment-card-body"> {comment.body} </p>
            <div className="comment-card-time-stamp"> 
                {comment.created_at.split("T")[1].split(".")[0]}, {comment.created_at.split("T")[0]}
            </div>
            <div className="comment-card-votes"> Votes: <br></br>{comment.votes}</div>
            {user === comment.author ? <button id="delete-button" className="comment-card-delete" onClick={handleDelete} value={comment.comment_id} disabled={disabledSwitch}> Delete me! </button> : null}
        </article>
    )
}