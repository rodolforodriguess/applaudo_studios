# ABOUT...

This project uses Cypress IO 9.7.0 version as testing framework

You must have node and npm installed. Installation guides are right below:

[NodeJS](https://nodejs.org/en/download/)

[NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)


## Manual Setup

### Git clone the project
```
1º: git clone https://github.com/rodolforodriguess/applaudo_studios.git
```

### Navigate to the project folder cloned and install the dependencies
```
2º: cd applaudo_studios && npm i
```
### Choose browser you want to run tests

3-A: To run in browser chrome in headless mode
```
npm run run:all:chrome
```

3-B: To run in browser firefox in headless mode
```
npm run run:all:firefox
```

3-C: To use cypress runner just run
```
npm run cy:open
```

>These commands will run all test scenarios in the browser chosen in background

### If you want to generate a mochawesome test report, run:
```
npm run posttest
```