import axios from "axios"

const apiClient  = axios.create({
    baseURL: "https://kp-news.onrender.com/",
    timeout: 2000,
})

export function randomNumber(){
    const randomNum = Math.floor(Math.random() * 6)+1
    return randomNum
}

export function getAllArticles(){
    return apiClient.get('/api/articles')
        .then(({ data }) => {
            return data
        })
}

export function getArticle(article_id){
    return apiClient.get(`/api/articles/${article_id}`)
        .then(({ data }) => {
            return data
        })
}

export function getComments(article_id){
    return apiClient.get(`/api/articles/${article_id}/comments`)
        .then(({ data }) => {
            return data
        })
}

export function patchArticle(patchArr){
    const voteData = {inc_votes: patchArr[0]}
    return apiClient.patch(`/api/articles/${patchArr[1]}`, voteData)
        .then(({ data }) => {
            return data
        })
}