import { call, put, takeEvery } from 'redux-saga/effects';
import { getPopCocktails } from '../slices/popCocktailsSlice';
import { API_KEY, cocktailsApi } from '../../axios/api';
import { ResponseGenerator } from './saga.interface';

function* popCocktailsSaga() {
    yield takeEvery('popCocktails/startPopCocktails', 
        function* ({payload}: any) {
            try {
                const data: ResponseGenerator = yield call(async () => await cocktailsApi({
                    method: 'get',
                    url: `/${API_KEY}/${payload}`,
                })
                .then(response => (response.data)));
                yield put(getPopCocktails(data));
            }
            catch {
                throw new Error('Error fetching popular cocktails data');
            }
        }
    );
}

export default popCocktailsSaga;