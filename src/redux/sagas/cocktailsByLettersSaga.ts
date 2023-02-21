import { call, put, takeEvery } from 'redux-saga/effects';
import { API_KEY, cocktailsApi } from '../../axios/api';
import { ResponseGenerator } from './saga.interface';
import { getCocktailsByLetters } from '../slices/cocktailsByLettersSlice';

function* cocktailsByLettersSaga() {
    yield takeEvery('cocktailsByLetters/startCocktailsByLetters', 
        function* ({payload}: any) {
            try {
                const data: ResponseGenerator = yield call(async () => await cocktailsApi({
                    method: 'get',
                    url: `/${API_KEY}/${payload}`,
                })
                .then(response => (response.data)));
                yield put(getCocktailsByLetters(data));
            }
            catch {
                throw new Error('Error fetching cocktails data on alphabet page');
            }
        }
    );
}

export default cocktailsByLettersSaga;