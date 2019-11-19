# TouchBistro Cypress Challenge

## Overview

The goal of this challenge is to create a simple cypress test suite for a simple web app. The simple web app that you will be testing consists of:

  - A React frontend that takes a simple input and returns the appropriate result or error message
  - A Node.js backend using express that consists of a single route and executes the following function:
  
If you believe that the behaviour encoutered when testing this app with cypress is not the correct behaviour, feel free to raise that and suggest the correct behaviour  

### Function

Given an upper limit of `n`, find the median prime number(s) of the set of prime numbers less than n.

### Example

a) If n = 10, the set of prime numbers less than 10 is [2,3,5,7], and so the medians are [3,5]

b) If n = 18, the set of prime numbers less than 18 is [2,3,5,7,11,13,17], and so the median is [7]

We will be assessing the challenge based on test practices, code style, working functionality, and usage of modern javascript (ES6).

## Goal

Create cypress tests that test for the above two example cases, as well as a test for the failure scenario when the input number is too large (i.e. greater than 10000000). Bonus points for going above and beyond.

## Submitting
Fork this repository, commit your code into that fork, and let us know when you are ready for us to review it! Best of luck!

## Running the Example application

### Clone repository
Run `git clone https://github.com/TouchBistro/cypress-challenge`

### Install Dependencies
Run `npm install` from the top level folder of this repository

### Running The App
Run `node server.js` in the main folder in your command line to start the server and go to http://localhost:3000 in your browser to view the app.

### Running The Backend Tests With Mocha
Run `npm run test` in your command line from the main folder to run the unit tests.
