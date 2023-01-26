// ** Redux Imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducer Imports
import todo from './apps/todo'

export const store = configureStore({
    reducer: { todo },
})
