import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

export class About extends PureComponent{
	render(){
		return(
			<div>About</div>
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

export default connect( mapStateToProps, mapDispatchToProps )( About );