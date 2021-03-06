import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from 'store';
import Routes from './routes';
import './index.css';

const store = configureStore();
const history = syncHistoryWithStore( browserHistory, store );

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ history }>
			{Routes}
		</Router>
	</Provider>,
  document.getElementById( 'root' )
);