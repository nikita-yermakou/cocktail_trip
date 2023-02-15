import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type PopCocktailsState = {
    popCocktails: {},
    isLoading: boolean
}

const initialState: PopCocktailsState = {
    popCocktails: {},
    isLoading: false
}
const popCocktailsSlice: any = createSlice({
    name: 'popCocktails',
    initialState,
    reducers: {
        startPopCocktails(state) {
            state.isLoading = true;
            console.log('start');
        },
        getPopCocktails(state, action: PayloadAction<{}>) {
            console.log('action', action);
            state.isLoading = false;
            state.popCocktails = action.payload;
            console.log('get');
        }
    }
})

export const {startPopCocktails, getPopCocktails} = popCocktailsSlice.actions;

export const popCocktailsReducer = popCocktailsSlice.reduser;