## NodeJS-react-scaffold
---------------------------
### Description:
This repository is meant as a starting point for a Universal / Isomorphic React Application in a Node JS environment.

#### This basic app contains:
    - /react: A basic react app rendered in Node back-end
    - /rest: Rest route to include your rest API
    - /api: Swagger UI to document your rest API
    - /info, /health: Info / Health check routing
    - Multi Language support
    - Error routing
    - Basic Mocha test setup

## Development
--------------
### Run locally
    - npm run clean-start: this will install the dependencies, build the generated files, open the browser and startup the backend.

### Develop a feature
    1) npm install: install dependencies
    3) npm run auto-start: start the server and watch for changes

### Deploy
TBD
    
## Technical setup
------------------
### Node Backend
     - ExpressJs
     - ES6
     - Mocha/Chai/Supertest test setup
     - Default routing: /health /info
     - Error routing
### Infra
     - PM2 yml file
     - Dynamic config setup (local/dev/test/acc/prod/etc)
### Code
     - EsLint from AirBnb standards
### Frontend
     - Webpack for ES6 transpiling with babel
     - Gulp for SASS and Swagger
     - Template Engine: HBS
     - Isomorphic react via Webpack (optional)
     - i18n multilan
