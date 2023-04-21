import React, { useEffect } from 'react';
import Cocktails from '../components/cocktails/Cocktails';
import { useAppDispatch, useAppSelector } from '../components/common/hooks';
import Loader from '../components/loader/loader';
import Video from '../components/video/video';
import { startPopCocktails } from '../redux/slices/popCocktailsSlice';
import { startRandomCocktails } from '../redux/slices/randomCocktailsSlice';
import RecentlyViewed from '../components/ingredients/recentlyViewed/recentlyViewed';

const HomePage: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(startPopCocktails('popular.php'));
        dispatch(startRandomCocktails('randomselection.php'));
    }, []);
    
    const popCocktails = useAppSelector((state) => state.popCocktails.popCocktails);
    const randomCocktails = useAppSelector((state) => state.randomCocktails.randomCocktails);
    const loading = useAppSelector((state) => state.randomCocktails.isLoading);
    const previosly: any = localStorage.getItem('recentlyViewed');
    const recentlyViewed = JSON.parse(previosly);
    
    return(
        <>
            {loading ?
            <Loader /> :
            <>
                <Video />
                <Cocktails store={popCocktails} title='Popular cocktails'/>
                <Cocktails store={randomCocktails} title='Random cocktails'/>
                {recentlyViewed && 
                    <RecentlyViewed store={recentlyViewed} title='Recently viewed cocktails'/>
                }
            </>
            }
        </>
    )
}

export default HomePage;