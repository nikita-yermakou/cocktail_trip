import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CocktailIF, CocktailsByLettersStateIF } from './slices.interfaces';

const initialState: CocktailsByLettersStateIF = {
    cocktailsByLetters: [],
    isLoading: false
}

const cocktailsByLettersSlice = createSlice({
    name: 'cocktailsByLetters',
    initialState,
    reducers: {
        startCocktailsByLetters: (state, action: PayloadAction<string>) => {
            state.isLoading = true;
        },
        getCocktailsByLetters: (state, action: PayloadAction<CocktailIF[]>) => {
            state.isLoading = false;
            state.cocktailsByLetters = action.payload;
        }
    }
})

export const {startCocktailsByLetters, getCocktailsByLetters} = cocktailsByLettersSlice.actions;
export const cocktailsByLettersReducer = cocktailsByLettersSlice.reducer;