/* eslint-disable */

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const webpack = require('webpack-stream');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

const config = require('./../config/config.build.json');
const getBasicWebpackConfig = require('./../basic.webpack');
const getProductionWebpackConfig = require('./../production.webpack');
const onError = require('./util').onError;

function buildJs(getWebpackConfig) {
  config.js.files.forEach(function (jsRootFile) {
    return gulp
      .src(jsRootFile.src)
      .pipe(plumber({
        errorHandler: onError
      }))
      .pipe(
        webpack(getWebpackConfig(jsRootFile.src, jsRootFile.dest, jsRootFile.file))
      )
      .pipe(gulp.dest(jsRootFile.dest))
      .pipe(notify({
        message: 'JS: ' + jsRootFile.file + ' build complete',
        onLast: true // otherwise the notify will be fired for each file in the pipe
      }));
  });
}

gulp.task('jsbuild', function () {
  buildJs(getBasicWebpackConfig)
});

gulp.task('jsbuild-prod', function () {
  buildJs(getProductionWebpackConfig);
});

gulp.task('lint', function () {
  return gulp.src(['**/*.js', '!node_modules/**', '!server/public/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
