import axios from "axios"

const apiClient  = axios.create({
    baseURL: "https://kp-news.onrender.com/",
    timeout: 2000,
})

export function getAllArticles(){
    return apiClient.get('/api/articles')
        .then(({ data }) => {
            return data
        })
}