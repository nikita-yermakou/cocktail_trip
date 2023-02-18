import { configureStore } from "@reduxjs/toolkit";
import { popCocktailsReducer } from '../slices/popCocktailsSlice';
import createSagaMiddleware from "@redux-saga/core";
import { randomCocktailsReducer } from "../slices/randomCocktailsSlice";
import randomCocktailsSaga from "../sagas/randomCocktailsSaga";
import popCocktailsSaga from "../sagas/popCocktailsSaga";
import { cocktailReducer } from "../slices/cocktailSlice";
import cocktailSaga from "../sagas/cocktailSaga";

const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        popCocktails: popCocktailsReducer,
        randomCocktails: randomCocktailsReducer,
        cocktail: cocktailReducer
    },
    middleware: [saga]
})
console.log('store');
saga.run(popCocktailsSaga);
saga.run(randomCocktailsSaga);
saga.run(cocktailSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;