var browserSync = require('browser-sync');
var gulp = require('gulp');
var config = require('../config').browserSync;

var rewriteModule = require('http-rewrite-middleware');

gulp.task('browserSync', [ 'build' ], function() {
	if (config.server.rewrite != undefined) {
		if(config.server.middleware == undefined) {
			config.server.middleware = [];
		}
		config.server.middleware.push(rewriteModule
				.getMiddleware(config.server.rewrite))
	}
	
	browserSync(config);
});
