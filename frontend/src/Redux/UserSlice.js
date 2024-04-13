import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserData: (state, action) => {
            state.currentUser = action.payload
        }
    }
})


export const { addUserData } = userSlice.actions
export default userSlice.reducer