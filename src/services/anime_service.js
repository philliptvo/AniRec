const ANIME_URL = "http://localhost:4000/api/anime";

const findAllAnimes = () => {
    return fetch(ANIME_URL)
        .then(response => response.json())
}

const findAnimeByTitle = (title) => {
    return fetch(`${ANIME_URL}/${title}`)
        .then(response => response.json())
}

const addAnime = (info) => {
    fetch(ANIME_URL, {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

const deleteAnime = (animeId) => {
    fetch(`${ANIME_URL}/${animeId}`, {
        method: "DELETE"
    }).then(response => response.json())
}

export default {
    findAllAnimes,
    findAnimeByTitle,
    addAnime
}