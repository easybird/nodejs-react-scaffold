const rimraf = require('rimraf');

rimraf('./server/public/css', () => console.log('removed css folder'));
rimraf('./server/public/js', () => console.log('removed js folder'));
rimraf('./server/public/swagger', () => console.log('removed swagger folder'));
