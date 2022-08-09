import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import greetingReducer from './greetingReducer';

const reducer = combineReducers({
    greeting: greetingReducer
})

const store = createStore(
    reducer,applyMiddleware(thunk)
);
export default store;