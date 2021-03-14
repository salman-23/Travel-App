import { combineReducers } from "redux";

import authReducer from "./authReducer";
import destinationReducer from "./destinationReducer";
import flightReducer from "./flightReducer";
import bookingReducer from "./bookingReducer";

const rootReducer = combineReducers({
  authReducer,
  destinationReducer,
  flightReducer,
  bookingReducer,
});

export default rootReducer;
