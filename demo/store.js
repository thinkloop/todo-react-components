import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// reducers
import todos from './todos/reducers/todos';
import siteHeader from './site/reducers/site-header';
const reducers = {
	todos,
	siteHeader
};

// console log middleware
const consoleLog = store => next => action => {
	if (typeof action !== 'function') {
		console.log(action);
	}
	return next(action);
};

// middleware
let middleWare;
if (process.env.NODE_ENV !== 'production') {
	middleWare = applyMiddleware(consoleLog, thunk);
} else {
	middleWare = applyMiddleware(thunk);
}

// create store
export default createStore(combineReducers(reducers), middleWare);
