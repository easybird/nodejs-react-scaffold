/* eslint-disable object-shorthand */
import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import hbs from 'express-handlebars';
import i18n from 'i18n';

export default function (app) {
  // set view engine
  app.set('view engine', 'hbs');

  // configure view engine
  app.engine('hbs', hbs({
    defaultLayout: path.join(__dirname, 'views/layouts/default.hbs'),
    partialsDir: path.join(__dirname, './views'),
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    helpers: {
      block: function block(name) {
        const blocks = this._blocks;
        const content = blocks && blocks[name];
        return content ? content.join('\n') : null;
      },
      contentFor: function contentFor(name, options) {
        const blocks = this._blocks || (this._blocks = {});
        const block = blocks[name] || (blocks[name] = []);
        block.push(options.fn(this));
      },
      json: function json(context) {
        return JSON.stringify(context).replace(/<\//g, '<\\/');
      },
      multilan: function multilan(...args) {
        return i18n.__.apply(this, args);
      }
    }
  }));

  // configure view path
  app.set('views', path.join(__dirname, 'views'));

  i18n.configure({
    locales: ['en', 'nl'],
    directory: path.join('config', 'locales'),
    api: {
      __: 'multilan'
    },
    indent: '  '
  });
  app.use(i18n.init);

  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

  app.use(express.static(path.join(__dirname, 'public')));
}
