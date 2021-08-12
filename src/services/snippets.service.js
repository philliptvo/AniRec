import {API_BASE_URL} from '../utils/constants'
import {request} from '../utils/helpers'

const SNIPPETS_URL = `${API_BASE_URL}/snippets`

const findAllSnippets = async () => {
    return request({
        url: SNIPPETS_URL,
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

// const createSnippet = async (snippets) => {
//     return request({
//         url: SNIPPETS_URL,
//         method: 'POST',
//         // need to alter***
//         body: JSON.stringify(snippets)
//     })
// }


const snippetsService = {
    findAllSnippets
   // createSnippet
}

export default snippetsService
