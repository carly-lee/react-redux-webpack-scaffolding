import React, { Component } from 'react';
import { connect } from 'react-redux';

export class App extends Component{
	constructor( props ){
		super( props );
	}

	render(){
		return(
			<div>App</div>
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