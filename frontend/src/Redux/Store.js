
// import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";

// import { apiSlice } from "./api/apiSlice";

// import loginReducer from './features/login/loginSlice';

// const store = configureStore({
//     reducer:{
//         [apiSlice.reducerPath]: apiSlice.reducer,
//         login: loginReducer,
//     },
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
//     devTools:true
// })

// setupListeners(store.dispatch)

// export default store





import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import {thunk} from 'redux-thunk';
import isAnonymousReducer from './IsAnonymous'
import storageSession from 'redux-persist/lib/storage/session'
import transactionReducer from './TransactionSlice';
const isAnoPersistConfig = {
     key: 'currentUser',
     storage: storageSession 
}
 const transactionPersistConfig = {
     key: 'transactions',
     storage: storageSession
 }

 const rootReducers = combineReducers({
     isAnonymous: persistReducer(isAnoPersistConfig, isAnonymousReducer),
     transaction: persistReducer(transactionPersistConfig, transactionReducer)
 })

 export const store = configureStore({
     reducer: rootReducers,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
       serializableCheck: false
   }).concat(thunk)
    
 })

 export const persistor = persistStore(store)