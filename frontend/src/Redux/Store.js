import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import {thunk} from 'redux-thunk';
import isAnonymousReducer from './IsAnonymous'
import storageSession from 'redux-persist/lib/storage/session'
import transactionReducer from './TransactionSlice'
const isAnoPersistConfig = {
    key: 'currentUser',
    storage: storageSession 
}

const rootReducers = combineReducers({
    isAnonymous: persistReducer(isAnoPersistConfig, isAnonymousReducer),
    transaction: transactionReducer
})

export const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(thunk)
    
})

export const persistor = persistStore(store)