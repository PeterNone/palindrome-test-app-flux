# Info

I decided to restructure my Palindrome Test App to work with Flux instead Redux, to showcase a different architecture type that I can work with.

## Plus

Plus of this is that application is a lot more loosely coupled then with Redux where all data meet in one big Reducer at the end. With Flux each part of the application can be separated with its own store and respond only to specific actions.

## Downside

Downside of this is that there are no Redux-Form in it and this module speeds up working with forms.




# Environment Setup

Clone or download this repo.

## Install global packages

> Install [Node](https://nodejs.org/en/download/)

Navigate to the folder containing this repo files and install local packages by entering a command


	npm install

---

## Start Development

Run Local Server

	npm start

Here all tested strings are saved to a .json file in:

> server/palindromes.json

Run Test

	npm test

Run Build

	npm run build


