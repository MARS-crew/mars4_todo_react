/* eslint-disable */

// ** Redux imports
import { createSlice } from '@reduxjs/toolkit'

export const appContentsSlice = createSlice({
    name: 'appContents',
    initialState: {
        loginned: false,
        token: '',
        name: '',
    },
    reducers: {
        setLoginned: (state, action) => {
            state.loginned = true
            state.token = action.payload.token
            state.name = action.payload.name
        },
    },
})

export const { setLoginned } = appContentsSlice.actions
export default appContentsSlice.reducer
