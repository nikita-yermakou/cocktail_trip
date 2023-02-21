import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CocktailIF, RandomStateIF } from './slices.interfaces';

const initialState: RandomStateIF = {
    randomCocktails: [],
    isLoading: false
}

const randomCocktailsSlice = createSlice({
    name: 'randomCocktails',
    initialState,
    reducers: {
        startRandomCocktails: (state, action: PayloadAction<string>) => {
            state.isLoading = true;
        },
        getRandomCocktails: (state, action: PayloadAction<CocktailIF[]>) => {
            state.isLoading = false;
            state.randomCocktails = action.payload;
        }
    }
})

export const {startRandomCocktails, getRandomCocktails} = randomCocktailsSlice.actions;
export const randomCocktailsReducer = randomCocktailsSlice.reducer;