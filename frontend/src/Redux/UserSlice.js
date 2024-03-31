import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '*********'
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserData: (state, action){
            state.userName = action.payload.userName
        }
    }
})