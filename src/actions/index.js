import axios from 'axios';
import PalindromeTest from '../common/palindrome';
import dispatcher from '../dispatcher';

//get const types for actions
import { ADD_PALINDROME, FETCH_PALINDROMES, PRELOADER_SHOW } from './types';

//json-server api url, proxy setting in package.json
const ROOT_URL = '/api/palindromes';


//action to fetch all palindromes from api with axios
export const fetchPalindromes = () => {
	//show preloader
	dispatcher.dispatch({
		type: PRELOADER_SHOW,
		payload: true
	});
	
	//make ajax request
	axios.get(`${ROOT_URL}`).then((result) => {
		//dispach all data
		dispatcher.dispatch({
			type: FETCH_PALINDROMES,
			payload: result.data
		});
		
		//hide preloader
		dispatcher.dispatch({
			type: PRELOADER_SHOW,
			payload: false
		});
	},
	(error) => {
		//console.log(error);
	}
	);
};


//action to add palindrome to api with axios
export const addPalindrome = (value) => {
	
	//show preloader
	dispatcher.dispatch({
		type: PRELOADER_SHOW,
		payload: true
	});
	
	//create object to add to api
	const obj = {
		timestamp: Date.now(),
		user_input: value,
		result: PalindromeTest(value)
	}
	
	//make ajax request
	axios.post(`${ROOT_URL}`, obj).then((result) => {
		dispatcher.dispatch({
			type: ADD_PALINDROME,
			payload: result.data
		});
		
		//hide preloader
		dispatcher.dispatch({
			type: PRELOADER_SHOW,
			payload: false
		});
	})
};
