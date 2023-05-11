import { createSlice } from "@reduxjs/toolkit";
import { UserSliceIF } from "./slices.interfaces";

const initialState: UserSliceIF = {
    email: null,
    token: null,
    id: null,
    check: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: (state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.check = action.payload.check;
        },
        removeUser: (state) => {
            state.email = null;
            state.token = null;
            state.id = null;
            state.check = null;
        }
    }
});

export const {getUser, removeUser} = userSlice.actions;
export const userReducer = userSlice.reducer;