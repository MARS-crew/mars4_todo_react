/* eslint-disable */

// ** Axios Imports
import axios from 'axios'
import { BASE_URL } from '..'

const auth = axios.create({
    baseURL: `${BASE_URL}/auth`,
    withCredentials: true,
})

export const login = async () => {}
