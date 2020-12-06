import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export const createRequestActionTypes = type => {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return [type, SUCCESS, FAILURE];
}

export default function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    //제너레이터 함수(function*())
    return function*(action) {
        yield put(startLoading(type)); // 로딩시작
        try {
            // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
            // API 함수에 넣어주고 싶은 인자는 call 함수의 두번째 인자부터 순서대로 넣어주면 됩니다.
            const response = yield call(request, action.payload); 
            yield put({
                type: SUCCESS,
                payload: response.data,
            }); //성공 액션 디스패치
        } catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true,
            }); //실패 액션 디스패치 
        }
        yield put(finishLoading(type)); // 로딩 끝 
    }

}