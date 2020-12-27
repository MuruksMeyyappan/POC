import { loginAction } from "../action";

const initialState = [];

export default function loginReducers(
  state = initialState,
  { type, payload, data, error }
) {
  switch (type) {
    case loginAction.LOGIN_USER_REQUEST:
      
      return {
        ...state,
        payload,
      };
    case loginAction.LOGIN_USER_SUCCESS:
      return {
        ...state,
        payload,
      };
    case loginAction.LOGIN_USER_FAILURE:
      return {
        ...state,
        payload,
      };
    default:
      return {
        ...state,
      };
  }
}
