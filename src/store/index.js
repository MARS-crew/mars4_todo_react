// ** Redux Imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducer Imports
import todo from './apps/todo'
import bucket from './apps/bucket'
import user from './apps/user'

export const store = configureStore({
    reducer: { todo, bucket, user },
})
