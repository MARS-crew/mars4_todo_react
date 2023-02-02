/* eslint-disable */

// ** Axios Imports
import axios from 'axios'
import { BASE_URL_DEV } from '..'

const auth = axios.create({
    baseURL: `${BASE_URL_DEV}/user`,
})

export const loginApi = async (user) => {
    try {
        return await auth.post('/login', user)
    } catch (err) {
        console.log(err)
    }
}

export const registerApi = async (user) => {
    try {
        return await auth.post('/', user)
    } catch (err) {
        console.log(err)
    }
}
