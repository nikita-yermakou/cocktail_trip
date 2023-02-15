import { configureStore } from "@reduxjs/toolkit";
import { popCocktailsReducer } from '../slices/popCocktailsSlice';
import createSagaMiddleware from "@redux-saga/core";
import popCocktailsSaga from "../sagas/popCocktailsSaga";

const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        popCocktails: popCocktailsReducer
    },
    middleware: [saga]
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

saga.run(popCocktailsSaga);
export default store;