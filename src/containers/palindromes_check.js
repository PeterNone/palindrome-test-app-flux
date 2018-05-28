import React, { Component } from 'react';

import { addPalindrome } from '../actions';


class PalindromesCheck extends Component {
	
	constructor() {
		super();
		
		//setting initial state
		this.state = {
			palindrome: '',
			palindrome_error: ''
		}
	}
	
	// checking if form has error
	validate(values) {
		let error = false;

		//error checks
		if (!values || values.trim() === '') {
			error = true;
			this.setState({
				palindrome_error: 'No palindrome text'
			});
		}
		
		return !error;
	}
	
	//changing state on input change
	onChange(event) {
		console.log(event.target);
		
		this.setState( {
			palindrome: event.target.value,
			palindrome_error: ''
		} );
	}
	
	//on submit stoping default event
	//chacking for errors
	//and if no errors calling new action with palindrome to check
	//clearing form and errors
	onSubmit(event) {
		event.preventDefault();
		
		if(this.validate(this.state.palindrome)) {
			
			addPalindrome(this.state.palindrome);
			
			this.setState( {
				palindrome: '',
				palindrome_error: ''
			} );
		}
	}
	
	//rendering the view
	render() {
		return (
			<div className="col-xs-12 col-sm-6 m-b-lg">
				<h4>Enter text to check if it's Palindrome Text</h4>
				<form onSubmit={ this.onSubmit.bind(this) }>
					<div className="input-group">
						<div className={(this.state.palindrome_error !== '') ? ' form-group has-error' : ' form-group'}>
							<input
								value={ this.state.palindrome }
								onChange={ this.onChange.bind(this) }
								type="text"
								name="palindrome"
								className="form-control"
								placeholder="Enter text..."
								autoComplete="off"
							/>
							<div className="error-input text-danger small">
								{ this.state.palindrome_error }
							</div>
						</div>
						<span className="input-group-btn">
							<button 
								className="btn btn-default btn-info" 
								type="submit">Check</button>
						</span>
					</div>
				</form>
			</div>
		);
	}
}


export default PalindromesCheck;
