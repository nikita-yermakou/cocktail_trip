import { createSlice } from '@reduxjs/toolkit';
import { StateIF } from './slices.interfaces';

const initialState: StateIF = {
    cocktailsByLetters: [],
    isLoading: false
}

const cocktailsByLettersSlice = createSlice({
    name: 'cocktailsByLetters',
    initialState,
    reducers: {
        startCocktailsByLetters: (state, action) => {
            state.isLoading = true;
        },
        getCocktailsByLetters: (state, action) => {
            state.isLoading = false;
            state.cocktailsByLetters = action.payload;
        }
    }
})

export const {startCocktailsByLetters, getCocktailsByLetters} = cocktailsByLettersSlice.actions;
export const cocktailsByLettersReducer = cocktailsByLettersSlice.reducer;