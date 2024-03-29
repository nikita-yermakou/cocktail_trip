export interface PopStateIF {
    popCocktails: CocktailIF[],
    isLoading: boolean
}

export interface RandomStateIF {
    randomCocktails: CocktailIF[],
    isLoading: boolean
}

export interface IngredientStateIF {
    ingredient: CocktailIF[],
    isLoading: boolean
}

export interface CocktailStateIF {
    cocktail: CocktailIF,
    isLoading: boolean
}

export interface CocktailsByLettersStateIF {
    cocktailsByLetters: CocktailIF[],
    isLoading: boolean
}

export interface CocktailsByIngredientStateIF {
    cocktailsByIngredient: CocktailIF,
    isLoading: boolean
}

export interface RecentlyViewedIF {
    recentlyViewed: []
}

export interface UserSliceIF {
    email: string | null,
    token: string | null,
    id: string | null,
    check: string | null
}

export interface AuthErrorSliceIF {
    error: string
}

export interface burgerMenuStateIF {
    burgerMenuState: boolean
}

export interface CocktailIF {
    idDrink?: string,
    strDrink?: string,
    strDrinkAlternate?: string,
    strTags?: string,
    strVideo?: string,
    strCategory?: string,
    strIBA?: string,
    strAlcoholic?: string,
    strGlass?: string,
    strInstructions?: string,
    strInstructionsES?: string,
    strInstructionsDE?: string,
    strInstructionsFR?: string,
    strInstructionsIT?: string,
    'strInstructionsZH-HANS'?: string,
    'strInstructionsZH-HANT'?: string,
    strDrinkThumb?: string,
    strIngredient1?: string,
    strIngredient2?: string,
    strIngredient3?: string,
    strIngredient4?: string,
    strIngredient5?: string,
    strIngredient6?: string,
    strIngredient7?: string,
    strIngredient8?: string,
    strIngredient9?: string,
    strIngredient10?: string,
    strIngredient11?: string,
    strIngredient12?: string,
    strIngredient13?: string,
    strIngredient14?: string,
    strIngredient15?: string,
    strMeasure1?: string,
    strMeasure2?: string,
    strMeasure3?: string,
    strMeasure4?: string,
    strMeasure5?: string,
    strMeasure6?: string,
    strMeasure7?: string,
    strMeasure8?: string,
    strMeasure9?: string,
    strMeasure10?: string,
    strMeasure11?: string,
    strMeasure12?: string,
    strMeasure13?: string,
    strMeasure14?: string,
    strMeasure15?: string,
    strImageSource?: string,
    strImageAttribution?: string,
    strCreativeCommonsConfirmed?: string,
    dateModified?: string
}