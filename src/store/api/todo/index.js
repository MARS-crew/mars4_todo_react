/* eslint-disable */

// ** Axios Imports
import axios from 'axios'
import { BASE_URL } from '..'

const todo = axios.create({
    baseURL: `${BASE_URL}/todo`,
    withCredentials: true,
})
