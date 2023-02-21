import { call, put, takeEvery } from 'redux-saga/effects';
import { getRandomCocktails } from '../slices/randomCocktailsSlice';
import { API_KEY, cocktailsApi } from '../../axios/api';
import { ResponseGenerator } from './saga.interface';

function* randomCocktailsSaga() {
    yield takeEvery('randomCocktails/startRandomCocktails', 
        function* ({payload}: any) {
            try {
                const data: ResponseGenerator = yield call(async () => await cocktailsApi({
                    method: 'get',
                    url: `/${API_KEY}/${payload}`,
                })
                .then(response => (response.data)));
                yield put(getRandomCocktails(data));
            }
            catch {
                throw new Error('Error fetching random cocktails data');
            }
        }
    );
}

export default randomCocktailsSaga;