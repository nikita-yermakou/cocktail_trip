import { call, put, takeEvery } from 'redux-saga/effects';
import { API_KEY, cocktailsApi } from '../../axios/api';
import { getCocktailsByIngredient } from '../slices/cocktailsByIngredientSlice';
import { ResponseGenerator } from './saga.interface';

function* cocktailsByIngredientSaga() {
    yield takeEvery('cocktailsByIngredient/startCocktailsByIngredient', 
        function* ({payload}: any) {
            console.log('saga1');
            const data: ResponseGenerator = yield call(async () => await cocktailsApi({
                method: 'get',
                url: `/${API_KEY}/${payload}`,
            })
            .then(response => (response.data)));
            console.log('saga2');
            yield put(getCocktailsByIngredient(data));
        }
    );
}

export default cocktailsByIngredientSaga;