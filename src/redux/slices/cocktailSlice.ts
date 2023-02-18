import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cocktail: [],
    isLoading: false
}

const cocktailSlice = createSlice({
    name: 'cocktail',
    initialState,
    reducers: {
        startCocktail: (state, action) => {
            state.isLoading = true;
        },
        getCocktail: (state, action) => {
            state.isLoading = false;
            state.cocktail = action.payload;
        }
    }
})

export const {startCocktail, getCocktail} = cocktailSlice.actions;
export const cocktailReducer = cocktailSlice.reducer;