import {ACCESS_TOKEN} from './constants'

const request = async (options) => {
    const headers = new Headers({
        'content-type': 'application/json',
    })

    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`)
    }

    const defaults = {headers: headers}
    options = Object.assign({}, defaults, options)

    return fetch(options.url, options)
    .then(res => {
        if (!res.ok) {
            Promise.reject(res.clone().json())
        }

        return res.clone().json()
    })
}

export {
    request
}
