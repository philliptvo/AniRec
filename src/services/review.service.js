import {API_BASE_URL} from '../utils/constants'
import {request} from '../utils/helpers'

const REVIEW_URL = `${API_BASE_URL}/reviews`

const findAllReviews = async () => {
    return request({
        url: REVIEW_URL,
        method: 'GET'
    })
}

// //need to find anime name by its id 
// const findAnimeById = async (animeId) => {
//     return request({
//         url: `${ANIME_URL}/${animeId}`,
//         method: 'GET'
//     })
// }

const createReview = async (anime) => {
    return request({
        url: REVIEW_URL,
        method: 'POST',
        // need to alter***
        body: JSON.stringify(anime)
    })
}

// const updateAnime = async (animeId, anime) => {
//     return request({
//         url: `${ANIME_URL}/${animeId}`,
//         method: 'PUT',
//         body: JSON.stringify(anime)
//     })
// }

// const deleteAnime = async (animeId) => {
//     return request({
//         url: `${ANIME_URL}/${animeId}`,
//         method: 'DELETE'
//     })
//}

const reviewService = {
    findAllReviews,
    // findAnimeById,
    createReview 
  
}

export default reviewService
