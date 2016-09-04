import ExampleApp from '../../../frontend/js/react/scaffold/ReactScaffoldApp';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import getFullUrl from '../../utils/helpers/getFullUrl';
import i18n from 'i18n';

export default function renderReactScaffoldApp(req, res) {
  const reactProps = {
    example: {
      name: req.scaffoldName,
      message: req.scaffoldMessage
    },
    currentUrl: getFullUrl(req),
    multilan: i18n.getCatalog(req)
  };

  const reactScaffoldApp = ReactDOMServer.renderToString(
    React.createFactory(ExampleApp)(reactProps));
  const reactBundle = '/js/react/react-scaffold-app.js';

  return res.render('reactScaffoldAppPage', {
    layout: 'default',
    react: {
      reactScaffoldApp,
      reactProps,
      reactBundle
    }
  });
}
