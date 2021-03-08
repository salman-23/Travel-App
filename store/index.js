import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
const store = createStore(reducer, applyMiddleware(thunk));

//store.dispatch(checkForToken());

export default store;
