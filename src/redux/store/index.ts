import { configureStore } from "@reduxjs/toolkit";
import { popCocktailsReducer } from '../slices/popCocktailsSlice';
import createSagaMiddleware from "@redux-saga/core";
import { randomCocktailsReducer } from "../slices/randomCocktailsSlice";
import randomCocktailsSaga from "../sagas/randomCocktailsSaga";
import popCocktailsSaga from "../sagas/popCocktailsSaga";
import { cocktailReducer } from "../slices/cocktailSlice";
import cocktailSaga from "../sagas/cocktailSaga";
import { ingredientReducer } from "../slices/ingredientSlice";
import ingredientSaga from "../sagas/ingredientSaga";
import { cocktailsByIngredientReducer } from "../slices/cocktailsByIngredientSlice";
import cocktailsByIngredientSaga from "../sagas/cocktailsByIngredientSaga";
import { cocktailsByLettersReducer } from "../slices/cocktailsByLettersSlice";
import cocktailsByLettersSaga from "../sagas/cocktailsByLettersSaga";
import { userReducer } from "redux/slices/userSlice";
import { authErrorReducer } from "redux/slices/authErrorSlice";
import { burgerMenuStateReducer } from "redux/slices/burgerMenuSlice";

const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        popCocktails: popCocktailsReducer,
        randomCocktails: randomCocktailsReducer,
        cocktail: cocktailReducer,
        ingredient: ingredientReducer,
        cocktailsByIngredient: cocktailsByIngredientReducer,
        cocktailsByLetters: cocktailsByLettersReducer,
        user: userReducer,
        error: authErrorReducer,
        burgerMenuState: burgerMenuStateReducer
    },
    middleware: [saga]
})

saga.run(popCocktailsSaga);
saga.run(randomCocktailsSaga);
saga.run(cocktailSaga);
saga.run(ingredientSaga);
saga.run(cocktailsByIngredientSaga);
saga.run(cocktailsByLettersSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;