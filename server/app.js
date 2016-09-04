import express from 'express';
import setupViewEngine from './setupViewEngine';
import addParsers from './addParsers';
import addRoutes from './routes/addRoutes';
import { setup as setupSwagger } from './middleware/swagger/setup';
import { version } from './../package.json';

const app = express();

addParsers(app);
setupViewEngine(app);
setupSwagger(app, {
  version,
  apis: ['./server/routes/*.js'],
  title: 'Navigation Service API',
  contact: 'Team Vegas'
});
addRoutes(app);

module.exports = app;
