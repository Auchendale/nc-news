import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticle } from '../utils/api-requests'

export default function articlePage(){

    const {article_id} = useParams()
    const [articleInfo, setArticleInfo] = useState([])
    const [articleTimeStamp, setArticleTimeStamp] = useState([])

    useEffect(() => {
        getArticle(article_id)
            .then(({ article }) => {
                setArticleInfo(article[0]) 
                setArticleTimeStamp([article[0].created_at.split("T")[0], article[0].created_at.split("T")[1].split(".")[0]])
            })
    }, [])
    

    return(
    <>
        <div className="article-page-card">
            <div className="article-title-author">
                <a className="article-title"> {articleInfo.title} </a>
                <a className="article-author"> by {articleInfo.author} </a>
            </div>
            <div className="article-body"> {articleInfo.body} </div>
            <div className="article-time-stamp">{articleTimeStamp[1]}, {articleTimeStamp[0]}</div>
            <div className="article-topic"> kp/{articleInfo.topic} </div>
            <div className="article-img">
                <img src={articleInfo.article_img_url}></img> 
            </div>
        </div>
    </>
    )
}