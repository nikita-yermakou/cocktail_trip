import { call, put, takeEvery } from 'redux-saga/effects';
import { API_KEY, cocktailsApi } from '../../axios/api';
import { getCocktailsByIngredient } from '../slices/cocktailsByIngredientSlice';
import { ResponseGenerator } from './saga.interface';

function* cocktailsByIngredientSaga() {
    yield takeEvery('cocktailsByIngredient/startCocktailsByIngredient', 
        function* ({payload}: any) {
            try {
                const data: ResponseGenerator = yield call(async () => await cocktailsApi({
                    method: 'get',
                    url: `/${API_KEY}/${payload}`,
                })
                .then(response => (response.data)));
                yield put(getCocktailsByIngredient(data));
            }
            catch {
                throw new Error('Error fetching cocktails data on ingredients page');
            }
        }
    );
}

export default cocktailsByIngredientSaga;