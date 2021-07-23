const ANIME_URL = "http://localhost:8080/api/anime";

const findAllAnimes = () => {
    return fetch(ANIME_URL)
        .then(response => response.json())
}

const findAnimeById = (animeId) => {
    return fetch(`${ANIME_URL}/${animeId}`)
        .then(response => response.json())
}

const createAnime = (info) => {
    return fetch(ANIME_URL, {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

const updateAnime = (animeId, anime) => {
    return fetch(`${ANIME_URL}/${animeId}`, {
        method: 'POST',
        body: JSON.stringify(anime),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

const deleteAnime = (animeId) => {
    return fetch(`${ANIME_URL}/${animeId}`, {
        method: "DELETE"
    }).then(response => response.json())
}

const animeService = {
    findAllAnimes,
    findAnimeById,
    createAnime,
    updateAnime,
    deleteAnime
}

export default animeService
