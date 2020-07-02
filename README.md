## Charity Portal
This is a tool to help with the organisation of tea parties in the local communities.

### Travis CI 
![Build Status](https://travis-ci.org/Tracht/charity-apr2020.svg?branch=master)

### Planning
[Planning](https://github.com/Tracht/charity-apr2020/wiki/Product)

### Features
- Coordinator can login/logout
- View, Add, and Delete members (drivers & guests), their addresses, and telephone numbers
- View and update members availabilities'
- Generate paired routes for drivers and guests using three options: shorest, average, and smart
- Generate a map to view paired routes 

### Tech Stack
- [Google Maps Directions API](https://developers.google.com/maps/documentation/directions/start) to generate routes for guest/driver pairs. 
- [Node](https://nodejs.org/en/) for the development environment.
- [Express](https://expressjs.com/) web framework for Node.js.
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) as our development language
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Mongo](https://www.mongodb.com) as as our non-relational database. 
- [Mongoose](https://mongoosejs.com) to model objects for MongoDB.
- [Prettier](https://prettier.io) for linting
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.
- [Travis](https://travis-ci.org) for continuous integration and build testing.
- [React](https://reactjs.org) as a front end controller. 
- [Heroku](https://www.heroku.com) for deployment. 

### Development Process
Our team used an agile development process with periodic sprints to deliver to our client with regular check ins and feature updates. The client's specification was broken down by our team into user stories which were then assigned to team member pairs. This process allowed us to integrate changes in specification late into development and keep the team running by dividing up dividing up tasks during the sprints. We used a process of branches, pull-request code reviews and continuous integration testing pipelines to keep our code clean and dependendable.

For an insight into our agile process you can view our team's [card wall here](https://trello.com/b/tg4zTEhc/charity-april-2020).

We employed extensive domain and database modelling for our application before beginning development as well as diagramming the flow of the application. There are links to our wiki with this planning below:

* [User Stories](https://github.com/Tracht/charity-apr2020/wiki/MVP-User-Stories)
* [Product Spec](https://github.com/Tracht/charity-apr2020/wiki/Product-Spec)
* [Tech Stack](https://github.com/Tracht/charity-apr2020/wiki/Tech-stack)

### Installation Guide
1. Clone or Fork this repo to your local machine
2. Install Node Version Manager (NVM) and ```nvm install 14.3.0 ```
3. Navigate into the project repo
4. Install Node.js dependencies ```npm install```
5. Install ```mongodb-community@4.2```
6. Start Mongodb with ```start mongodb-community@4.2```
7. ```npm start``` to start the server
8. Visit http://localhost:3000 to see the website in action!

### Testing
The test server must be running for integration tests to pass. The test server runs on port 3030 at http://localhost:3030. 

* In one terminal (start the test server): ```npm run start:test``` 
* In another terminal, run these commands 
  * To run all the tests (Jest and Cypress): ```npm test```
  * To run Jest unit tests: ```npm run test:unit```
  * To run Cypress feature tests: ```npm run test:integratiton```

### Learning
We ran daily retros to review each other's code and clarified our learning with a wiki post detailing the new knowledge we had acquired. You can a link to an overview of daily learning [here](https://github.com/Tracht/charity-apr2020/wiki/Learnings).
