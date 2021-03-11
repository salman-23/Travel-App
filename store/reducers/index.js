import { combineReducers } from "redux";

import authReducer from "./authReducer";
import destinationReducer from "./destinationReducer";
import flightReducer from "./flightReducer";

const rootReducer = combineReducers({
  authReducer,
  destinationReducer,
  flightReducer,
});

export default rootReducer;
