/* eslint-disable */

const gulp = require('gulp');
const cached = require('gulp-cached');
const scssLint = require('gulp-scss-lint');
const cssmin = require('gulp-cssmin');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
const bless = require('gulp-bless');
const rename = require('gulp-rename');

const config = require('./../config/config.build.json');
const getArgument = require('./util').getArgument;
const onError = require('./util').onError;

gulp.task('scsslint', function () {
  return gulp.src(config.sass.hint.src)
    .pipe(cached('scssLint'))
    .pipe(scssLint());
});

gulp.task('sass', ['scsslint'], function () {
  return gulp.start('sassbuild');
});

gulp.task('sassbuild', function () {
  const sassoutputArg = getArgument('sassoutput');

  config.sass.files.forEach(function (sassRootFile) {
    return gulp.src(sassRootFile.src)
      .pipe(plumber({
        errorHandler: onError
      }))

      .pipe(sass({
        outputStyle: sassoutputArg === null || ['nested', 'expanded', 'compact', 'compressed'].indexOf(sassoutputArg) < 0 ? 'expanded' : sassoutputArg
      }))
      .pipe(autoprefixer({
        browsers: config.sass.autoprefixer.browsers
      }))
      .pipe(bless())
      .pipe(gulp.dest(sassRootFile.dest))
      .pipe(notify({
        message: 'SASS: ' + sassRootFile.file + ' build complete',
        onLast: true // otherwise the notify will be fired for each file in the pipe
      }));
  });
});

gulp.task('cssmin', ['sass'], function () {
  return gulp.start('cssminify');
});

gulp.task('cssminbuild', ['sassbuild'], function () {
  return gulp.start('cssminify');
});

gulp.task('cssminify', function () {
  return gulp.src(config.sass.minify.src)
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.sass.minify.dest));
});
