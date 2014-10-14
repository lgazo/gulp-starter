var gulp = require('gulp');
//var sass = require('gulp-ruby-sass');
var sass = require('gulp-sass');
var handleErrors = require('../util/handleErrors');
var config=require('../config').sass;

gulp.task('sass-pure', ['images'], function () {
	  return gulp.src(config.src)
	    .pipe(sass())
	    .on('error', handleErrors)
	    .pipe(gulp.dest(config.dest));
	});


//var gulp        = require("gulp");
//var sass        = require("gulp-ruby-sass");
//var filter      = require('gulp-filter');
//var browserSync = require("browser-sync");
//
//gulp.task('sass', function () {
//    return gulp.src('scss/**/*.scss')
//        .pipe(sass({sourcemap: true}))
//        .pipe(gulp.dest('css'))// Write the CSS & Source maps
//        .pipe(filter('**/*.css')) // Filtering stream to only css files
//        .pipe(browserSync.reload({stream:true}));
//});

