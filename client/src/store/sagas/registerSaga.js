import { takeLatest, call, put } from "redux-saga/effects";
import { registerAction } from "../action";
import { RegisterUser } from "../../apiCalls/api";
// Register User
function* registerUserRequest({ payload }) {
  try {
    console.log("Payload3", payload);
    const response = yield call(RegisterUser, payload);
    yield put(registerAction.registerUserSuccess(response));
  } catch (e) {
    yield put(registerAction.registerUserFailure(e));
  }
}
export default function* watchLoginUserRequest() {
  yield takeLatest(registerAction.REGISTER_USER_REQUEST, registerUserRequest);
}