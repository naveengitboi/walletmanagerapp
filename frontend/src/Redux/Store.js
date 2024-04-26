import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice'
import isAnonymousReducer from './IsAnonymous'

export const store = configureStore({
    reducer: {
        user: userReducer,
        isAnonymous: isAnonymousReducer
    }
})

