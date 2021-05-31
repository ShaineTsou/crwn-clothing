import { takeLatest, put, all, call} from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';

import { clearCart } from './cart.actions';

export function* clearCartOnSignOut() {
    yield put(clearCart());
};

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, clearCartOnSignOut);
};

export function* cartSaga() {
    yield all([call(onSignOutSuccess)])
};