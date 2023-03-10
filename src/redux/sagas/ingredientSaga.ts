import { put, call, takeEvery } from "redux-saga/effects";
import { API_KEY, cocktailsApi } from "../../axios/api";
import { getIngredient } from "../slices/ingredientSlice";
import { ResponseGenerator } from "./saga.interface";

function* ingredientSaga () {
    yield takeEvery('ingredient/startIngredient',
        function* ({payload}: any) {
            try {
                const data: ResponseGenerator[] = yield call(async () => await cocktailsApi({
                    method: 'get',
                    url: `/${API_KEY}/${payload}`
                }).then(response => (response.data.ingredients)));
                yield put(getIngredient(data));
            }
            catch {
                throw new Error('Error fetching ingredient data');
            }
        }
    );
}

export default ingredientSaga;