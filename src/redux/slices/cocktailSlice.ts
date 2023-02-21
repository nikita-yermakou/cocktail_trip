import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CocktailIF, CocktailStateIF } from './slices.interfaces';

const initialState: CocktailStateIF = {
    cocktail: {},
    isLoading: false
}

const cocktailSlice = createSlice({
    name: 'cocktail',
    initialState,
    reducers: {
        startCocktail: (state, action: PayloadAction<string>) => {
            state.isLoading = true;
        },
        getCocktail: (state, action: PayloadAction<CocktailIF>) => {
            state.isLoading = false;
            state.cocktail = action.payload;
        }
    }
})

export const {startCocktail, getCocktail} = cocktailSlice.actions;
export const cocktailReducer = cocktailSlice.reducer;