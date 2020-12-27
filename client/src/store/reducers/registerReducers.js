import { registerAction } from "../action";

const initialState = [];

export default function registerReducers(
  state = initialState,
  { type, payload, data, error }
) {
  switch (type) {
    case registerAction.REGISTER_USER_REQUEST:
      console.log("Payload", payload);
      return {
        ...state,
        payload,
      };
    case registerAction.REGISTER_USER_SUCCESS:
      return {
        ...state,
        payload,
      };
    case registerAction.REGISTER_USER_FAILURE:
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