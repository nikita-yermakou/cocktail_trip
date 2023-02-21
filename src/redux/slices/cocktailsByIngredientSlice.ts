import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CocktailIF, CocktailsByIngredientStateIF } from './slices.interfaces';

const initialState: CocktailsByIngredientStateIF = {
    cocktailsByIngredient: {},
    isLoading: false
}

const cocktailsByIngredientSlice = createSlice({
    name: 'cocktailsByIngredient',
    initialState,
    reducers: {
        startCocktailsByIngredient: (state, action: PayloadAction<string>) => {
            state.isLoading = true;
        },
        getCocktailsByIngredient: (state, action: PayloadAction<CocktailIF>) => {
            state.isLoading = false;
            state.cocktailsByIngredient = action.payload;
        }
    }
})

export const {startCocktailsByIngredient, getCocktailsByIngredient} = cocktailsByIngredientSlice.actions;
export const cocktailsByIngredientReducer = cocktailsByIngredientSlice.reducer;