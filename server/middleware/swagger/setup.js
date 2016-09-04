import swaggerJSDoc from 'swagger-jsdoc';
import config from '../../../config/config';

export function setup(app, { version, apis, title, contact }) {
  const swaggerDefinition = {
    swagger: '2.0',
    info: {
      title,
      version,
      contact: {
        name: contact
      }
    },
    host: config.domain,
    basePath: '/'
  };

  const swaggerSpec = swaggerJSDoc({ swaggerDefinition, apis });

  app.get('/v2/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
}
