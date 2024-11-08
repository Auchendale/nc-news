import React, {useEffect, useState, useParams } from 'react'
import { getAllArticles } from '../utils/api-requests'
import ArticleCard from './ArticleCard'

export default function CategoryPage(){

    const params = useParams()
    const category="cooking"

    const [listOfCategorisedArticles, setListOfCategorisedArticles] = useState([])

        
    useEffect(() => {
        setIsLoading(true)
        getAllArticles(category)
            .then(({ articles }) => {
                setListOfCategorisedArticles(articles)
                setIsLoading(false)
            })
            .catch((err) => {
                setIsError(true)
            })
    }, [])
    
    return (
        <>
        {/* <ul className="articles-list">
            {listOfCategorisedArticles.map((article) => {
                return <ArticleCard article={article} key={`${article.author}.${article.article_id}`}/>
            })}
        </ul> */}
        </>
    )
}
