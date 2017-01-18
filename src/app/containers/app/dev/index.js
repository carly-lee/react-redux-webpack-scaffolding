import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';

import DevTools from 'app/DevTools';

export class App extends PureComponent{

	static propTypes = {
		children: PropTypes.element,
	}

	render(){
		return(
			<div>
				{ this.props.children }
				<DevTools />
			</div>
		);
	}
}

function mapStateToProps( state ){
	return {
	};
}


function mapDispatchToProps( dispatch ){
	return {
	};
}

export default connect( mapStateToProps, mapDispatchToProps )( App );