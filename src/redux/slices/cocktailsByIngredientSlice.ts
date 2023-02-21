import { createSlice } from '@reduxjs/toolkit';
import { StateIF } from './slices.interfaces';

const initialState: StateIF = {
    cocktailsByIngredient: [],
    isLoading: false
}

const cocktailsByIngredientSlice = createSlice({
    name: 'cocktailsByIngredient',
    initialState,
    reducers: {
        startCocktailsByIngredient: (state, action) => {
            state.isLoading = true;
        },
        getCocktailsByIngredient: (state, action) => {
            state.isLoading = false;
            state.cocktailsByIngredient = action.payload;
        }
    }
})

export const {startCocktailsByIngredient, getCocktailsByIngredient} = cocktailsByIngredientSlice.actions;
export const cocktailsByIngredientReducer = cocktailsByIngredientSlice.reducer;