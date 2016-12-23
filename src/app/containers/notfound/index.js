import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

export class NotFound extends PureComponent{
	render(){
		return(
			<div>Not Found</div>
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

export default connect( mapStateToProps, mapDispatchToProps )( NotFound );