import React, { Component } from 'react';

import Nav from './components/nav';
import PalindromesCheck from './containers/palindromes_check';
import PalindromesList from './containers/palindromes_list';
import Preloader from './containers/preloader';


//Added Bootstrap just to give a little better UI look
//2 containers that will have access to store and
//1 component just to dislplay static header to clean code

class App extends Component {
	render() {
		return (
			<div className="App">
				
				<Nav />
				
				<Preloader />
				
				<div className="container">
					
					<div className="row">
						
						<PalindromesCheck />
						
						<PalindromesList />
						
					</div>
				</div>
				
			</div>
		);
	}
}

export default App;
