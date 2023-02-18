import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    randomCocktails: [],
    isLoading: false
}

const randomCocktailsSlice = createSlice({
    name: 'randomCocktails',
    initialState,
    reducers: {
        startRandomCocktails: (state, action) => {
            state.isLoading = true;
        },
        getRandomCocktails: (state, action) => {
            state.isLoading = false;
            state.randomCocktails = action.payload;
        }
    }
})

export const {startRandomCocktails, getRandomCocktails} = randomCocktailsSlice.actions;
export const randomCocktailsReducer = randomCocktailsSlice.reducer;