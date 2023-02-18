import { call, put, takeEvery } from 'redux-saga/effects';
import { getPopCocktails } from '../slices/popCocktailsSlice';
import { API_KEY, cocktailsApi } from '../../axios/api';
import { ResponseGenerator } from './saga.interface';

function* popCocktailsSaga() {
    yield takeEvery('popCocktails/startPopCocktails', 
        function* ({payload}: any) {
            const data: ResponseGenerator = yield call(async () => await cocktailsApi({
                method: 'get',
                url: `/${API_KEY}/${payload}`,
            })
            .then(response => (response.data)));
            console.log(data);
            yield put(getPopCocktails(data));
        }
    );
}

export default popCocktailsSaga;