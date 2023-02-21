import { call, put, takeEvery } from 'redux-saga/effects';
import { API_KEY, cocktailsApi } from '../../axios/api';
import { ResponseGenerator } from './saga.interface';
import { getCocktail } from '../slices/cocktailSlice';

function* cocktailSaga() {
    yield takeEvery('cocktail/startCocktail', 
        function* ({payload}: any) {
            try {
                const data: ResponseGenerator = yield call(async () => await cocktailsApi({
                    method: 'get',
                    url: `/${API_KEY}/${payload}`,
                })
                .then(response => (response.data)));
                yield put(getCocktail(data));
            }
            catch {
                throw new Error('Error fetching cocktail data');
            }
        }
    );
}

export default cocktailSaga;