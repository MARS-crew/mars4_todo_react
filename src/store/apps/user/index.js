/* eslint-disable */

// ** Redux imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'
import { BASE_URL_DEV } from '../../../api'

export const fetchData = createAsyncThunk('appContents/fetchData', async (params) => {})

export const appContentsSlice = createSlice({
    name: 'appContents',
    initialState: {},

    reducers: {},
    extraReducers: (builder) => {},
})

export default appContentsSlice.reducer
