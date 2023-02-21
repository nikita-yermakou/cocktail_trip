import { CocktailIF, CocktailsByIngredientStateIF, CocktailsByLettersStateIF, CocktailStateIF, IngredientStateIF, PopStateIF, RandomStateIF } from "../../redux/slices/slices.interfaces";

export interface CocktailsProps {
    store: CocktailIF[],
    title: string
}

export interface DrinksIF {
    drinks: CocktailIF[]
}

export interface CocktailProps {
    name: string,
    id: string,
    img: string
}