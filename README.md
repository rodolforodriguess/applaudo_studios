# ABOUT...

This project uses Cypress IO with 9.7.0 version as testing framework and mochawesome to generate test reports

You must have node and npm installed. Installation guides are right below:

[NodeJS](https://nodejs.org/en/download/)

[NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)


## Setup

### Git clone the project
```
1º: git clone https://github.com/rodolforodriguess/applaudo_studios.git
```

### Navigate to the project folder cloned and install the dependencies
```
2º: cd applaudo_studios && npm i
```
3-A: To run in browser chrome in headless mode
```
npm run run:chrome
```

3-B: To use cypress runner just run
```
npm run cy:open
```

>These commands will run all test scenarios in the browser chosen in background

### If you want to generate a mochawesome test report, run:
```
npm run posttest
```
>A html file is expected to open in your default browser. To do so, a temporary server is created by a npm script in your local machine. You can terminate it by pressing CTRL + C in the command line
where the server is opened
