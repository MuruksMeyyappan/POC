// Register User

export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

// Register Action
export function registerUserRequest(payload) {
  console.log("Payload2", payload);
  return { type: REGISTER_USER_REQUEST, payload };
}

export function registerUserSuccess(payload) {
  return { type: REGISTER_USER_SUCCESS, payload };
}

export function registerUserFailure(payload) {
  return { type: REGISTER_USER_FAILURE, payload };
}