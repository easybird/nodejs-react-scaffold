const gulp = require('gulp');
const config = require('./../config/config.build.json');

gulp.task('swagger', () => gulp.src(config.swagger.src).pipe(gulp.dest(config.swagger.dest)));
