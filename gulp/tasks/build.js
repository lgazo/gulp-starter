var gulp = require('gulp');

//@change
//gulp.task('build', ['browserify', 'sass', 'images', 'markup']);
gulp.task('build', [ 'javascript', 'bower', 'sass', 'images', 'markup']);