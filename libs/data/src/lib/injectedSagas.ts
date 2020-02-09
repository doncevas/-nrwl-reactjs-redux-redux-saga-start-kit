import { all, fork } from 'redux-saga/effects';
import {githubData} from './reducers/test-reducer/saga';

export default function* rootSaga() {
    yield all([
        fork(githubData),
    ])
  }
