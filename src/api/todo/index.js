/* eslint-disable */

// ** Axios Imports
import axios from 'axios'
import { BASE_URL_DEV } from '..'

const todo = axios.create({
    baseURL: `${BASE_URL_DEV}/todo`,
})

export const saveTodoApi = async (text) => {
    try {
        return await todo.post('/', { text })
    } catch (err) {
        console.log(err)
    }
}

export const updateTodoApi = async (id, text) => {
    try {
        return await todo.put(`/${id}`, { text })
    } catch (err) {
        console.log(err)
    }
}

export const deleteTodoApi = async (id) => {
    try {
        return await todo.delete(`/${id}`)
    } catch (err) {
        console.log(err)
    }
}
