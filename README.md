## Charity Portal
This is a tool to help with the organisation of tea parties in the local communities.

### Travis CI 
![Build Status](https://travis-ci.org/Tracht/charity-apr2020.svg?branch=master)

### Features
- Coordinator can login/logout
- View, Add, and Delete members (drivers & guests), their addresses, and telephone numbers
- View and update members availabilities'
- Generate paired routes for drivers and guests using three options: shorest, average, and smart
- Generate a map to view paired routes 

### Tech Stack
- **[Mongo](https://www.mongodb.com)** as as our non-relational database. 
- **[Express](https://expressjs.com/)** web framework for Node.js.
- **[React](https://reactjs.org)** as a front end controller. 
- **[Node](https://nodejs.org/en/)** for the development environment.
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) as our development languag
- [Google Maps Directions API](https://developers.google.com/maps/documentation/directions/start) to generate routes for guest/driver pairs. 
- [Mongoose](https://mongoosejs.com) to model objects for MongoDB.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Prettier](https://prettier.io) for linting
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.
- [Travis](https://travis-ci.org) for continuous integration and build testing.
- [Heroku](https://www.heroku.com) for deployment. 

### Development Process
Our team used an agile development process with periodic sprints to deliver to our client with regular check ins and feature updates. The client's specification was broken down by our team into a [product spec][1] which were then turned into user stories and finally assigned to team member pairs. This process allowed us to integrate changes in specification late into development and keep the team running by dividing up dividing up tasks during the sprints. We used a process of branches, pull-request code reviews and continuous integration testing pipelines to keep our code clean and dependendable.

For an insight into our agile process you can view our team's [card wall here](https://trello.com/b/tg4zTEhc/charity-april-2020).

We employed extensive domain and database modelling for our application before beginning development as well as diagramming the flow of the application. There are links to our wiki with this planning below:


### MVP user stories
`Coordinator Access`:

```
As a coordinator 
So that I can use portal 
I would like to log in with an account created by an admin
```

```
As a coordinator
So that I can maintain the security of the system
I would like to log out
```

`Drivers / Guests`:

```
As a coordinator
So that I can organise the drivers
I would like to see a list drivers with their name and address
```

```
As a coordinator 
So that I can recruit new drivers
I would like to input new driver’s with their name and address
```

```
As a coordinator 
So that I can organise the drivers effectively
I would like to view the drivers availability
```

```
As a coordinator 
So that I can respond to the changing demands of the drivers schedules
I would like to update or add to the drivers availability
```


```
As a coordinator
So that I can organise the guests
I would like to see a list guests with their name and address
```

```
As a coordinator 
So that I can introduce more guests to the group
I would like to input a guests name and address
```

```
As a coordinator 
So that I can organise the guests effectively
I would like to view the guests availability
```

```
As a coordinator 
So that I can respond to the changing demands of the guests schedules
I would like to update or add to the guests availability
```

`Route Generation`:

```
As a coordinator 
So that I can see the months pairings
I would like to select a month from drop down menu
```

```
As a coordinator 
So that I can generate the pairings
I would like to see a table of randomly paired drivers and guests
```

```
As a coordinator 
So that I can visualise the pairing logistics
I would like to see a map of the pairs in the table
```


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

[1]: https://github.com/Tracht/charity-apr2020/wiki/Product-Spec
