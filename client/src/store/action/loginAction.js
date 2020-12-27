/*
 * action types
 */

// Login User

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

// login Action
export function loginUserRequest(payload) {
  
  return { type: LOGIN_USER_REQUEST, payload };
}

export function loginUserSuccess(payload) {
  return { type: LOGIN_USER_SUCCESS, payload };
}

export function loginUserFailure(payload) {
  return { type: LOGIN_USER_FAILURE, payload };
}