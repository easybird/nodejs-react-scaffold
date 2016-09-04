## NodeJS-react-scaffold
---------------------------
### Description:
A NodeJs-react-service

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
