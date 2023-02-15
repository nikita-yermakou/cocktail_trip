import { call, put, takeEvery } from 'redux-saga/effects';
import { getPopCocktails } from '../slices/popCocktailsSlice';
import axios from 'axios';

const dataAxios = async () => await axios.get('https://thecocktaildb.com/api/json/v2/9973533/popular.php').then(response => (response.data));

export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}

function* getPopCocktailsAxios() {
    console.log('saga3');
    const data: ResponseGenerator = yield call(dataAxios);
    console.log('saga4');
    console.log(data);
    yield put(getPopCocktails(data));
}

function* popCocktailsSaga() {
    console.log('saga1');
    yield takeEvery('popCocktails/startPopCocktails', getPopCocktailsAxios);
    console.log('saga2');
}

export default popCocktailsSaga;