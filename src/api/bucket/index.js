/* eslint-disable */

// ** Axios Imports
import axios from 'axios'
import { BASE_URL_DEV } from '..'

const bucket = axios.create({
    baseURL: `${BASE_URL_DEV}/bucket`,
})
