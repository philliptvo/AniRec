import {API_BASE_URL} from '../utils/constants'
import {request} from '../utils/helpers'

const SNIPPETS_URL = `${API_BASE_URL}/snippets`

const findAllSnippets = async () => {
    return request({
        url: SNIPPETS_URL,
        method: 'GET'
    })
}

// const findAllUpvotes = async () => {
//     return request({
//         url: 'localhost:8080/api/upvotes',
//         method: 'GET'
//     })
// }

//need to find anime name by its id 
const findSnippetsById = async (snipId) => {
    return request({
        url: `${SNIPPETS_URL}/${snipId}`,
        method: 'GET'
    })
}

// const createSnippet = async (snippets) => {
//     return request({
//         url: SNIPPETS_URL,
//         method: 'POST',
//         // need to alter***
//         body: JSON.stringify(snippets)
//     })
// }


const snippetsService = {
    findAllSnippets,
    findSnippetsById
   // createSnippet
}

export default snippetsService
