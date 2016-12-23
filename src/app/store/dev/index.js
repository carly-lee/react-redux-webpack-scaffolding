import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import * as reducers from 'reducers';
import DevTools from 'app/DevTools';

export default function configureStore(){

	const combinedReducers = combineReducers({
		...reducers,
		routing: routerReducer,
	});

	const enhancer = compose(
    applyMiddleware( thunk, routerMiddleware( browserHistory ), createLogger()),
    DevTools.instrument()
  );

	const store = createStore( combinedReducers, enhancer );

	if ( module.hot )
		{module.hot.accept( 'reducers', () =>
      store.replaceReducer( require( 'reducers' )/*.default if you use Babel 6+ */ )
    );}


	return store;
}
