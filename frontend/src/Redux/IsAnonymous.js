import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userExist: false,
};

const isAnonymousSlice = createSlice({
  name: "check user",
  initialState,
  reducers: {
    addUserExist: (state) => {
      state.userExist = true;
    },
    removeUserExist: (state) => {
      state.userExist = false;
    },
  },
});


export const {addUserExist, removeUserExist} = isAnonymousSlice.actions

export default isAnonymousSlice.reducer