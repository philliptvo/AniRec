const ANIME_URL = "http://localhost:8080/api/anime";

const findAllAnimes = async () => {
    return fetch(ANIME_URL)
        .then(response => response.json())
}

const findAnimeById = async (animeId) => {
    return fetch(`${ANIME_URL}/${animeId}`)
        .then(response => response.json())
}

const createAnime = async (anime) => {
    return fetch(ANIME_URL, {
        method: 'POST',
        body: JSON.stringify(anime),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => {
        if (!res.ok) {
            throw Error('Failed to create anime')
        }
        return res.json()
    })
}

const updateAnime = async (animeId, anime) => {
    return fetch(`${ANIME_URL}/${animeId}`, {
        method: 'PUT',
        body: JSON.stringify(anime),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => {
        if (!res.ok) {
            throw Error('Failed to update anime')
        }
        return res.json()
    })
}

const deleteAnime = async (animeId) => {
    return fetch(`${ANIME_URL}/${animeId}`, {
        method: "DELETE"
    }).then(res => {
        if (!res.ok) {
            throw Error('Failed to delete anime')
        }
        return res.json()
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
