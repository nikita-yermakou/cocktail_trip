import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CocktailIF, StateIF } from './slices.interfaces';

const initialState: StateIF = {
    popCocktails: [],
    isLoading: false
}

const popCocktailsSlice = createSlice({
    name: 'popCocktails',
    initialState,
    reducers: {
        startPopCocktails: (state, action: PayloadAction<string>) => {
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