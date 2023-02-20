import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    ingredient: [],
    isLoading: false
}

const ingredientSlice = createSlice({
    name: 'ingredient',
    initialState,
    reducers: {
        startIngredient: (state, action) => {
            state.isLoading = true;
            console.log('slice1');
        },
        getIngredient: (state, action) => {
            state.isLoading = false;
            state.ingredient = action.payload
            console.log('slice2');
        }
    }
});

export const { startIngredient, getIngredient } = ingredientSlice.actions;
export const ingredientReducer = ingredientSlice.reducer;