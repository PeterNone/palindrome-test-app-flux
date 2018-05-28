import React, { Component } from 'react';
import { PRELOADER_SHOW } from '../actions/types';
import dispatcher from '../dispatcher';

//new preloader component displaing loading while ajax request are in progress
class Preloader extends Component {
	
	constructor() {
		super();
		//initial state
		this.state = {
			show: false
		}
		
		this.onAction = this.onAction.bind(this);
	}
	
	//registering to dispacher
	componentDidMount() {
		this.register = dispatcher.register(this.onAction);
	}
	
	//unregistering from dispacher
	componentWillUnmount() {
		dispatcher.unregister(this.register);
	}
	
	//Listener for correct action
	onAction(action) {
		switch (action.type) {
			case PRELOADER_SHOW:
				this.setState( { show: action.payload } );
				break;
				
			default:
				break;
		}
	}
	
	//rendering the view
	//no view if preloader not needed
	render() {
		if(!this.state.show) {
			return '';
		}
		
		return (
			<div className="preloader">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
							<p className="p-a-md bg-primary text-center">Loading...</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Preloader;
