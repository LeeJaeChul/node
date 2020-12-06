import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

/**
    요청을 위한 액션 타입을 paylaod로설정합니다. ( 예: "sample/GET_POST");
 */

/*  createAction(ACTION_NAME, 파라미터)
 이 작업이 필수는 아니며 생략해도 동일하게 작동
 다만 넣어주는 것이 가독성이 좋아진다.
 함수가 어떤 파라미터를 필요로 하는지 파악할 수 있다.
 result 
 {
    type : START_LOADING,
    payload : requestType
}
 */

 export const startLoading = createAction(
     START_LOADING,
     requestType => requestType,
 );

 export const finishLoading = createAction(
     FINISH_LOADING,
     requestType => requestType
 );

 const initialState = {}; // 리듀서 

 const loading = handleActions(
     {
         [START_LOADING]: (state, action) => ({
             ...state,
             [action.payload]: true,
         }),
         [FINISH_LOADING]: (state, action) => ({
             ...state,
             [action.payload]: false,
         }),
     },
     initialState,
 );

 export default loading;