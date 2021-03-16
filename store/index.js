import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { checkForToken } from "./actions/authActions";
import { fetchDestinations } from "./actions/destinationActions";
import { fetchTravelClasses } from "./actions/travelClassActions";

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(checkForToken());
store.dispatch(fetchDestinations());
store.dispatch(fetchTravelClasses());

export default store;
