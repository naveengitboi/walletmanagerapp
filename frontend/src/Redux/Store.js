import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import {thunk} from 'redux-thunk';
import isAnonymousReducer from './IsAnonymous'
import storageSession from 'redux-persist/lib/storage/session'

const isAnoPersistConfig = {
    key: 'currentUser',
    storage: storageSession 
}

const rootReducers = combineReducers({
    isAnonymous: persistReducer(isAnoPersistConfig, isAnonymousReducer)
})

export const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export const persistor = persistStore(store)