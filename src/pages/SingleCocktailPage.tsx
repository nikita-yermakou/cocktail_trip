import { useEffect } from "react";
import SingleCocktail from "../components/cocktails/cocktail/singleCocktail"
import { useAppDispatch, useAppSelector } from "../components/common/hooks";
import { startCocktail } from "../redux/slices/cocktailSlice";
import { startPopCocktails } from "../redux/slices/popCocktailsSlice";
import { startRandomCocktails } from "../redux/slices/randomCocktailsSlice";

const SingleCocktailPage = () => {

    return(
        <SingleCocktail title='Popular cocktails'/>
    )
}

export default SingleCocktailPage;