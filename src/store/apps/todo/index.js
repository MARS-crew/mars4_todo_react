/* eslint-disable */
// ** Redux imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'
import { BASE_URL_DEV } from '../../../api'

const todo = axios.create({
    baseURL: `${BASE_URL_DEV}/todo`,
    withCredentials: true,
})

export const fetchData = createAsyncThunk('appContents/fetchData', async () => {
    const res = await todo.get('/', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    })

    return res.data
})

export const fetchNoData = createAsyncThunk('appContents/fetchNoData', async (id) => {
    const res = await todo.get(`/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    })

    return res.data
})

export const appContentsSlice = createSlice({
    name: 'appContents',
    initialState: {
        errCd: '',
        errMsg: '',
        responseData: [],
        responseNoData: {},
        loadingStat: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        // ** Todo Data 가져오기 peding
        builder.addCase(fetchData.pending, (state, action) => {
            if (!state.loadingStat) {
                state.loadingStat = true
            }
        })

        // ** Todo Data 가져오기fulfilled
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.errCd = action.payload.status
            state.errMsg = action.payload.message
            state.responseData = action.payload.responseData ? action.payload.responseData : null
            if (state.loadingStat) {
                state.loadingStat = false
            }
        })

        // ** Todo Data 하나 가져오기 peding
        builder.addCase(fetchNoData.pending, (state, action) => {
            if (!state.loadingStat) {
                state.loadingStat = true
            }
        })

        // ** Todo Data 하나 가져오기fulfilled
        builder.addCase(fetchNoData.fulfilled, (state, action) => {
            state.errCd = action.payload.status
            state.errMsg = action.payload.message
            state.responseData = action.payload.responseData ? action.payload.responseData : null
            if (state.loadingStat) {
                state.loadingStat = false
            }
        })
    },
})

export default appContentsSlice.reducer
