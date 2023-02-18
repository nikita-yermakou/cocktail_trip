import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    popCocktails: [],
    isLoading: false
}

const popCocktailsSlice = createSlice({
    name: 'popCocktails',
    initialState,
    reducers: {
        startPopCocktails: (state, action) => {
            state.isLoading = true;
        },
        getPopCocktails: (state, action) => {
            state.isLoading = false;
            state.popCocktails = action.payload;
        }
    }
})

export const {startPopCocktails, getPopCocktails} = popCocktailsSlice.actions;
export const popCocktailsReducer = popCocktailsSlice.reducer;