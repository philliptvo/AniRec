import {API_BASE_URL} from '../utils/constants'
import {request} from '../utils/helpers'

const ANIME_URL = `${API_BASE_URL}/anime`

const findAllAnimes = async () => {
    return request({
        url: ANIME_URL,
        method: 'GET'
    })
}

const findAnimeById = async (animeId) => {
    return request({
        url: `${ANIME_URL}/${animeId}`,
        method: 'GET'
    })
}

const createAnime = async (anime) => {
    return request({
        url: ANIME_URL,
        method: 'POST',
        body: JSON.stringify(anime)
    })
}

const updateAnime = async (animeId, anime) => {
    return request({
        url: `${ANIME_URL}/${animeId}`,
        method: 'PUT',
        body: JSON.stringify(anime)
    })
}

const deleteAnime = async (animeId) => {
    return request({
        url: `${ANIME_URL}/${animeId}`,
        method: 'DELETE'
    })
}

const animeService = {
    findAllAnimes,
    findAnimeById,
    createAnime,
    updateAnime,
    deleteAnime
}

export default animeService
