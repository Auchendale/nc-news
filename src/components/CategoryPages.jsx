import React, {useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getAllArticles } from '../utils/api-requests'
import ArticleCard from './ArticleCard'

export default function CategoryPage({currentPage, setCurrentPage}){

    const { category } = useParams()

    const [listOfCategorisedArticles, setListOfCategorisedArticles] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        setIsError(false)
        getAllArticles(category)
            .then(({ articles }) => {
                setListOfCategorisedArticles(articles)
                setIsLoading(false)
            })
            .catch((err) => {
                setIsError(true)
            })
    }, [category])
    
    if(isError){
        return <h1 className="error-loading-messages">Uh oh! Something went wrong lol</h1>
    }

    if(isLoading){
        return <h1 className="error-loading-messages">Loading...</h1>
    }

    return (
        <>
        <ul className="articles-list">
            {listOfCategorisedArticles.map((article) => {
                return <ArticleCard article={article} key={`${article.author}.${article.article_id}`}/>
            })}
        </ul>
        </>
    )
}
