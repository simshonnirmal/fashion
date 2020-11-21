import { all } from 'redux-saga/effects';
import { watchLoginSaga} from './loginsaga';
import {watchOrderlistSaga} from './orderlistsaga';
export default function* rootSaga(){
  yield all([
    watchLoginSaga(),
    watchOrderlistSaga()
  ]);
}
