import healthRoute from './healthRoute';
import infoRoute from './infoRoute';
import envRoute from './envRoute';
import restRoutes from './restRoutes';
import reactScaffoldRoute from './reactScaffoldRoute';
import addErrorRoutes from './error/addErrorRoutes';
import swaggerRoute from './../middleware/swagger/route';

export default function (app) {
  app.use('/health', healthRoute);
  app.use('/info', infoRoute);
  app.use('/rest', restRoutes);
  app.use('/env', envRoute);
  app.use('/api', swaggerRoute);
  app.use('/react', reactScaffoldRoute);
  app.use('/', (req, res, next) => next());

  addErrorRoutes(app);
}
