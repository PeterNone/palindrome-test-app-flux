import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { ADD_PALINDROME, FETCH_PALINDROMES } from '../actions/types';


class PalindromesStore extends EventEmitter {
	constructor() {
		super();
		this.palindromes = [];
	}
	
	setPalindromes(value) {
		this.palindromes = value;
		this.emit("change");
	}
	
	addPalindrome(value) {
		this.palindromes.push(value);
		this.emit("change");
	}
		
	getAll() {
		return this.palindromes;
	}
	
	handleActions(action) {
		//console.log('Action', action);
		
		switch (action.type) {
			case ADD_PALINDROME:
				this.addPalindrome(action.payload);
				break;
			case FETCH_PALINDROMES:
				this.setPalindromes(action.payload);
				break;
		
			default:
				break;
		}
	}
}

const palindromesStore = new PalindromesStore();
dispatcher.register(palindromesStore.handleActions.bind(palindromesStore));

window.dispatcher = dispatcher;
window.store = palindromesStore;

export default palindromesStore;