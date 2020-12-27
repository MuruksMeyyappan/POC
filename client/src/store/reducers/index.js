import { combineReducers } from "redux";
import LoginReducers from "./loginReducers";
import RegisterReducers from "./registerReducers";

export default combineReducers({ LoginReducers, RegisterReducers });