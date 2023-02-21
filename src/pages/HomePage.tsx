import React, { useEffect } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import Cocktails from '../components/cocktails/Cocktails';
import { useAppDispatch, useAppSelector } from '../components/common/hooks';
import Loader from '../components/loader/loader';
import { startPopCocktails } from '../redux/slices/popCocktailsSlice';
import { startRandomCocktails } from '../redux/slices/randomCocktailsSlice';

const HomePage: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(startPopCocktails('popular.php'));
        dispatch(startRandomCocktails('randomselection.php'));
    }, []);

    const popCocktails = useAppSelector((state) => state.popCocktails.popCocktails);
    const randomCocktails = useAppSelector((state) => state.randomCocktails.randomCocktails);
    const loading = useAppSelector((state) => state.randomCocktails.isLoading);

    return(
        <>
            {loading ?
            <Loader /> :
            <>
                <Cocktails store={popCocktails} title='Popular cocktails'/>
                <Cocktails store={randomCocktails} title='Random cocktails'/>
            </>
            }
        </>
    )
}

export default HomePage;