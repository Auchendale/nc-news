import React, {useEffect, useState } from 'react'
import { getAllArticles, patchArticle } from '../utils/api-requests'
import ArticleCard from './ArticleCard'

export default function Homepage (){

    const [listOfArticles, setListOfArticles] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setIsLoading(true)
        setIsError(false)
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
                return <ArticleCard article={article} key={`${article.author}.${article.article_id}`}/>
            })}
        </ul>
        </>
    )
}