import axios from 'axios';

export const API_KEY = '9973533';
export const cocktailsApi = axios.create({
    baseURL: 'https://thecocktaildb.com/api/json/v2'
});

export const ingredientImgApi = axios.create({
    baseURL: 'https://thecocktaildb.com/images/ingredients'
});


