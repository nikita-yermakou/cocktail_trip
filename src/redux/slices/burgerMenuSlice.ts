import { createSlice } from "@reduxjs/toolkit";
import { burgerMenuStateIF } from "./slices.interfaces";

const initialState: burgerMenuStateIF = {
    burgerMenuState: false
}

const burgerMenuStateSlice = createSlice({
    name: 'burgerMenu',
    initialState,
    reducers: {
        changeBurgerMenuState: (state, action) => {
            state.burgerMenuState = action.payload.burgerMenuState;
        }
    }
});

export const {changeBurgerMenuState} = burgerMenuStateSlice.actions;
export const burgerMenuStateReducer = burgerMenuStateSlice.reducer;