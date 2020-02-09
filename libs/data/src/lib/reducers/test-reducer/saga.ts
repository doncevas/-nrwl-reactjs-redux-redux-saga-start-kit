import { put,takeEvery } from 'redux-saga/effects';
import { changeUsernameSuccess } from './actions';
import ActionTypes from './constants';

export function* changeName(actions) {    
  try {
    const newNname = 'new Name';
    yield put(changeUsernameSuccess(newNname));
  } catch (err) {
    console.log(err);
  }
}

export function* githubData() {  
  yield takeEvery(ActionTypes.CHANGE_USERNAME, changeName);
}

export default githubData;