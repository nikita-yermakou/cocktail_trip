import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../../redux/store';
import { useState, useEffect } from 'react';
import { ThemeIF } from './styles';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//custom hook that create variable in local storage and assign it one value
export const useLocalStorage = (initialValue: ThemeIF | string, key: string) => {
    const getValue = () => {
        const storage = localStorage.getItem(key);

        if (storage) {
            return JSON.parse(storage);
        }
        return initialValue;
    }
    
    const [value, setValue] = useState(getValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}  

//custom hook that create array, where will be stored data of cocktail. They will add after visit page of cocktail
export const useRecentlyViewed = (initialValue: [], key: string) => {
    const getValue = () => {
        const storage = localStorage.getItem(key);

        if (storage) {
            return JSON.parse(storage);
        }
        return initialValue;
    }

    const [recentlyViewed, setRecentlyViewed] = useState<any>(getValue);

    useEffect(() => {
        localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    }, [recentlyViewed]);

    const addRecentlyViewed = (item: any) => {
        const existingProduct = recentlyViewed.find((e: any) => e.idDrink === item.idDrink);

        if (!existingProduct) {
            setRecentlyViewed([...recentlyViewed, item]);
        }
    }

    return [recentlyViewed, addRecentlyViewed];
}
