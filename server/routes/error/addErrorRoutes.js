function catchAllUnexistingRoutes(app) {
  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
}

function renderErrors(app) {
  function addRenderErrorRoute(isProduction) {
    // !!defining next is needed, even if not used!!
    app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
      // !!defining next is needed, even if not used!!

      res.status(err.status || 500);

      if (req.originalUrl.indexOf('/rest') !== -1) {
        return res.json({
          message: err.message,
          error: isProduction ? '' : err
        });
      }

      const layout = 'default';

      return res.render('error', {
        layout,
        message: err.message,
        error: isProduction ? '' : err
      });
    });
  }

  if (app.get('env') === 'production') {
    return addRenderErrorRoute(true);
  }
  return addRenderErrorRoute(false);
}

export default function (app) {
  catchAllUnexistingRoutes(app);
  renderErrors(app);
}
