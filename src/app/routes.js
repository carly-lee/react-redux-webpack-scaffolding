import React  from 'react';
import { Route, IndexRoute } from 'react-router';

import App  from 'appContainer';
import About from 'containers/about';
import NotFound from 'containers/notfound';

const Routes = (
	<Route path={ '/' } component={ App }>
		<IndexRoute component={ About } />
		<Route path="about" component={ About } />
		<Route path='*' component={ NotFound } status={ 404 } />
	</Route>
);

export default Routes;

