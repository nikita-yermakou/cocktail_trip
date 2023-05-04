import { createSlice } from "@reduxjs/toolkit";
import { AuthErrorSliceIF } from "./slices.interfaces";

const initialState: AuthErrorSliceIF = {
    error: ''
}

const authErrorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        getError: (state, action) => {
            state.error = action.payload.error;
        },
        removeError: (state) => {
            state.error = '';
        }
    }
});

export const {getError, removeError} = authErrorSlice.actions;
export const authErrorReducer = authErrorSlice.reducer;