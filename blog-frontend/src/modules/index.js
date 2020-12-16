import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';


const rootReducer = combineReducers({
    auth,
    loading,
    user,
    write
});
// 리듀서를 하나로 합쳐주는 작업 (combineReducers)

export function* rootSaga() {
    yield all([authSaga(), userSaga(), writeSaga()]);
}

export default rootReducer;