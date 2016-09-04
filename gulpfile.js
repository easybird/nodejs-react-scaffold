/* eslint-disable */

var gulp = require('gulp'),
  config = require('./config/config.build.json');

require('./gulp/sass.task');
require('./gulp/js.task');
require('./gulp/swagger.task');

gulp.task('default', function () {
  gulp.start('cssmin', 'jsbuild', 'swagger');

  gulp.watch(config.sass.watch, ['cssmin']);
  gulp.watch(config.js.watch, ['jsbuild']);
});

gulp.task('build', ['cssminbuild', 'lint', 'jsbuild', 'swagger']);
