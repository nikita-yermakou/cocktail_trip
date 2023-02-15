import { PopCocktailsContainer } from './popCocktails.styles';
import axios from 'axios';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../common/hooks';
import { startPopCocktails } from '../redux/slices/popCocktailsSlice';
import { AppDispatch, RootState } from '../redux/store';
import { useSelector } from 'react-redux';
    
const PopCocktails = () => {
    const dispatch = useAppDispatch();
    console.log('dis');

    useEffect(() => {
        dispatch(startPopCocktails());
    }, []);

    const cocktails = useAppSelector((state: any) => state.popCocktails.popCocktails);

    return(
        <PopCocktailsContainer>
            <ul>
                {cocktails.map((cocktail: any) => (
                    <li>{cocktail.strDrink}</li>
                ))}
            </ul>
        </PopCocktailsContainer>
    )
}

export default PopCocktails;

