import { ACCESS_TOKEN, API_BASE_URL } from "../utils/constants";
import { request } from "../utils/helpers";

const AUTH_URL = `${API_BASE_URL}/auth`
const USER_URL = `${API_BASE_URL}/users`

const loginUser = async (credentials) => {
    return request({
        url: `${AUTH_URL}/login`,
        method: 'POST',
        body: JSON.stringify(credentials)
    })
}

const registerUser = async (newUser) => {
    return request({
        url: `${AUTH_URL}/register`,
        method: 'POST',
        body: JSON.stringify(newUser)
    })
}

const getCurrentUser = async () => {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject('No access token set')
    }

    return request({
        url: `${USER_URL}/me`,
        method: 'GET'
    })
}

const findAllUsers = async () => {
    return request({
        url: USER_URL,
        method: 'GET'
    })
}

const findUserByUserName = async (userName) => {
    return request({
        url: `${USER_URL}/${userName}`,
        method: 'GET'
    })
}

const updateUser = async (userName, user) => {
    return request({
        url: `${USER_URL}/${userName}`,
        method: 'PUT',
        body: JSON.stringify(user)
    })
}

const deleteUser = async (userName) => {
    return request({
        url: `${USER_URL}/${userName}`,
        method: 'DELETE'
    })
}

const userService = {
    loginUser,
    registerUser,
    getCurrentUser,
    findAllUsers,
    findUserByUserName,
    updateUser,
    deleteUser
}

export default userService;
