import { takeLatest, call, put } from "redux-saga/effects";
import { loginAction } from "../action";
import { LoginUser } from "../../apiCalls/api";

function* loginUserRequest({ payload }) {
  try {
    const response = yield call(LoginUser, payload);
    yield put(loginAction.loginUserSuccess(response));
  } catch (e) {
    console.log("Error -->", e);
    yield put(loginAction.loginUserFailure(e));
  }
}

export default function* watchLoginUserRequest() {
  yield takeLatest(loginAction.LOGIN_USER_REQUEST, loginUserRequest);
}
