import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CocktailIF, IngredientStateIF } from './slices.interfaces';

const initialState: IngredientStateIF = {
    ingredient: [],
    isLoading: false
}

const ingredientSlice = createSlice({
    name: 'ingredient',
    initialState,
    reducers: {
        startIngredient: (state, action: PayloadAction<string>) => {
            state.isLoading = true;
        },
        getIngredient: (state, action: PayloadAction<CocktailIF[]>) => {
            state.isLoading = false;
            state.ingredient = action.payload;
        }
    }
});

export const { startIngredient, getIngredient } = ingredientSlice.actions;
export const ingredientReducer = ingredientSlice.reducer;