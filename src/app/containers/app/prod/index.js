import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';

export class App extends PureComponent{

	static propTypes = {
		children: PropTypes.element,
	}

	render(){
		return(
			<div>
				{ this.props.children }
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