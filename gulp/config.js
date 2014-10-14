//@changed
var dest = "./target";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
// multi-tenant rewrite rule
//      ,rewrite: [
//        {
//          from : '^/[^/]+/(.*)$',
//     	  to : '/$1'
//     	}
//      ]
    }
// multi-tenant default tenant URL    
//    ,startPath: '/acme/',
    ,files: [
      dest + "/**",
      // Exclude Map files
      "!" + dest + "/**.map"
    ]
  },
  sass: {
    src: src + "/sass/*.{sass, scss}",
    // @changed
    dest: dest + "/css"
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  markup: {
    src: src + "/**/*.html",
    dest: dest
  },
  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extentions to make optional
    extensions: ['.coffee', '.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: './src/javascript/app.coffee',
      dest: dest,
      outputName: 'app.js'
    }, {
      entries: './src/javascript/head.coffee',
      dest: dest,
      outputName: 'head.js'
    }]
  },
  //@changed
  javascript: {
	  src_module: src + "/javascript/**/module.js",
	  src: src + "/javascript/**/*.js",
	  dest: dest + "/javascript"
  },
  bower: {
	  src: src + "/bower_components/**",
	  dest: dest + "/bower_components"
  }
};
