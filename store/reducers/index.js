import { combineReducers } from "redux";

import authReducer from "./authReducer";
import destinationReducer from "./destinationReducer";
import flightReducer from "./flightReducer";
import bookingReducer from "./bookingReducer";
import travelClassReducer from "./travelClassReducer";

const rootReducer = combineReducers({
  authReducer,
  destinationReducer,
  flightReducer,
  bookingReducer,
  travelClassReducer,
});

export default rootReducer;
