import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import * as reducers from 'reducers';

export default function configureStore(){

	const combinedReducers = combineReducers({
		...reducers,
		routing: routerReducer,
	});

	const enhancer = compose(
		applyMiddleware( thunk, routerMiddleware( browserHistory ))
  );

	const store = createStore( combinedReducers, enhancer );

	return store;
}
