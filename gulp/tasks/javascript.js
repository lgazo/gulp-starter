var gulp = require('gulp');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var config      = require('../config').javascript;
var sourcemaps = require('gulp-sourcemaps');
 
gulp.task('javascript', function () {
  gulp.src([config.src_module, config.src])
  	.pipe(gulpif(global.isWatching, sourcemaps.init()))
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulpif(global.isWatching, sourcemaps.write()))
    .pipe(gulp.dest(config.dest))
});