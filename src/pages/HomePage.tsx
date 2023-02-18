import React, { useEffect } from 'react';
import Cocktails from '../components/cocktails/Cocktails';
import { useAppDispatch, useAppSelector } from '../components/common/hooks';
import { startPopCocktails } from '../redux/slices/popCocktailsSlice';
import { startRandomCocktails } from '../redux/slices/randomCocktailsSlice';

const HomePage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(startPopCocktails('popular.php'));
        dispatch(startRandomCocktails('randomselection.php'));
    }, []);

    const popCocktails = useAppSelector((state: any) => state.popCocktails.popCocktails);
    const randomCocktails = useAppSelector((state: any) => state.randomCocktails.randomCocktails);

    return(
        <>
            <Cocktails store={popCocktails} title='Popular cocktails'/>
            <Cocktails store={randomCocktails} title='Random cocktails'/>
        </>
    )
}

export default HomePage;