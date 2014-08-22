/*global module:false*/
module.exports = function(grunt){
	var DISTPATH = "js-webshim";
	var MINPATH = DISTPATH+"/minified";
	var DEVPATH = DISTPATH+"/dev";
	
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		//concat is changed through webshimscombos
		concat: {
			options: {
				separator: ';'
			},
			demo: {
				src: ['demos/demo-js/src/prism.js', 'demos/demo-js/src/behavior.js'],
				dest: 'demos/demo-js/demo.js'
			},
			cfgs: {
				src: ['demos/demos/cfgs/assets/jquery.deserialize.js', 'demos/demos/cfgs/assets/configurator.js'],
				dest: 'demos/demos/cfgs/assets/cfg.js'
			}
		},
		//copy and uglify are changed through cfgcopymin
		copy: {
			main: {},
			archive: {
				files: [{src: 'webshims-stable.zip', dest: 'webshims-<%= pkg.version %>.zip'}]
			}
		},
		compress: {
			main: {
				options: {
					archive: 'webshims-stable.zip'
				},
				files: [
					{expand: true, cwd: 'demos/', src: ['**'], dest: 'demos/', filter: function(filepath){
						if(filepath.indexOf('demos/js-webshim') == 0 || filepath.indexOf('.tmp') != -1){
							return false;
						}
						return true;
					}},
					{expand: true, cwd: 'js-webshim/', src: ['**'], dest: 'js-webshim/'}
				]
			}
		},
		clean: {
			build: {
				src: ['js-webshim/', 'src/shims/combos', 'webshims-*.zip']
			}
		},
		cssmin: getFiles('src', MINPATH, '**/*.css'),
		sass: {
			dist: { 
				files:[{
					expand : true,
					cwd : 'src/shims/styles/scss',
					src : ['*.scss'],
					dest : 'src/shims/styles/',
					ext : '.css'
				}]
			},
			jme: {
				files:[{
					expand : true,
					cwd : 'src/shims/jme',
					src : ['*.scss'],
					dest : 'src/shims/jme',
					ext : '.css'
				}]
			}
		},
		/*not used for build but might be really helpfull for production*/
		/* should we create a npm grunt task???*/
		optimizePolyfiller: {
			options: {
				src: 'js-webshim/dev/', //required
				features: 'forms',

				dest: 'polyfiller-custom.js',
				//should existing uglify be extended to uglify custom polyfiller? default: false
				uglify: true,
				
				//should initially loaded files inlined into polyfiller? default: false
				inlineInitFiles: true,
				/*
				//only in case inlineInitFiles is true
				*/
				//which lang or langs are used on page?
				lang: 'fr it',
				//forms feature option default: false
				customMessages: false,
				//forms-ext feature option default: false
				replaceUI: false,
				//is swfobject not used on site default: true
				includeSwfmini: true
			}
		},
		bytesize: {
			all: {
				src: [
					MINPATH+'/polyfiller.js'
				]
			}
		},
		uglify: {
			options: {
				beautify: {
					ascii_only : true
				},
				preserveComments: 'some',
				compress: {
				global_defs: {
					"WSDEBUG": false
				},
					dead_code: true
				}
			},
			demo: {
				src: 'demos/demo-js/demo.js',
				dest: 'demos/demo-js/demo.js'
			},

			cfgs: {
				src: 'demos/demos/cfgs/assets/cfg.js',
				dest: 'demos/demos/cfgs/assets/cfg.js'
			}
		},
		watch: {
			sass: {
				files: ['src/**/*.scss'],
				tasks: ['sass']
			},
			css: {
				files: ['src/**/*.css'],
				tasks: ['cfgcopymin', 'copy']
			},
			js: {
				files: ['src/**/*.js'],
				tasks: ['webshimscombos', 'concat', 'cfgcopymin', 'copy']
			},
			demos: {
				files: ['demos/demo-js/src/**/*.js'],
				tasks: ['concat:demo']
			},
			cfgs: {
				files: ['demos/demos/cfgs/assets/**/*.js'],
				tasks: ['concat:cfgs']
			}
		}
	});

	grunt.registerTask('versiontest', 'test the current version of build', function(){
		var version = grunt.file.readJSON(DEVPATH+'/shims/combos/comboinfo.json').version;
		var packageinfos = ['package.json', 'bower.json', 'webshims.jquery.json'];
		if(!/^\d+\.\d+\.\d+$/.test(version)){
			grunt.warn('version "'+ version +'" is not valid');
		}
		if(grunt.file.readJSON('webshims.jquery.json').download.indexOf('webshims-'+version+'.zip') == -1){
			grunt.warn('download in webshims manifest is not valid version');
		}
		for(var i = 0; i < packageinfos.length; i++){
			if(grunt.file.readJSON(packageinfos[i]).version != version){
				grunt.warn('version in"'+ packageinfos[i] +'" does not match file-version');
			}
		}
	});

	grunt.registerTask('webshimscombos', 'create combos from polyfiller.js.', function() {
		var phantomjs = require('phantomjs');
		var done = this.async();
		var combos = {};
		grunt.util.spawn({
			cmd: phantomjs.path,
			args: [
				// The main script file.
				'build/combobuild.js',
				// The QUnit helper file to be injected.
				'build/build.html'
			]
		}, 
		function(err, result, code) {
			var concatCfg;
			result = result.toString();
			if(!err && result.indexOf && result.indexOf('done') == -1){
				
				try {
					combos = JSON.parse(result);
				} catch(er){
					grunt.warn('parse error');
				}
				
				concatCfg = grunt.config('concat');
				if(concatCfg){
					concatCfg.combos = {files: combos.files};
				} else {
					concatCfg = combos.files;
				}
				//grunt.warn(JSON.stringify(concatCfg))
				grunt.config('concat', concatCfg);
				grunt.file.write(DEVPATH+'/shims/combos/comboinfo.json', result);
				done(code);
				return;
			}
			
			// Something went horribly wrong.
			grunt.verbose.or.writeln();
			grunt.log.write('Running PhantomJS...').error();
			if (code === 127) {
				grunt.warn('PhantomJS not found.');
			} else {
				result.split('\n').forEach(grunt.log.error, grunt.log);
				grunt.warn('PhantomJS exited unexpectedly with exit code ' + code + '.');
			}
			
			done(code);
		});
	});
	
	grunt.registerTask('cfgcopymin', 'config min and copy tasks.', function() {
		var files = getFiles('src', false, '**', 'demos/js-webshim/dev', '*.js');
		var path = require('path');
		var copyTask = {};
		var minTask = {};
		var minPath, file, found;
		var exclude = /(\.scss|config\.rb|\.txt|\.php)$/;
		
		for(var i in files){
			file = files[i];
			if(grunt.file.isFile(file)){
				minPath = path.join(MINPATH, i);
				if(/\.js$/.test(file)){
					minTask[minPath] = [file];
					found = true;
				}
				if(! exclude.test(file) ){
					copyTask[minPath] = [file];
				}
				copyTask[path.join(DEVPATH, i)] = [file];
			}
		}
		if(!found){
			minTask[path.join(MINPATH, 'polyfiller.js')] = path.join('src', 'polyfiller.js');
		}
		var uglifyCfg = grunt.config('uglify');
		var copyCfg = grunt.config('copy');
		
		uglifyCfg.dist = { 'files': minTask };
		copyCfg.main = { 'files': copyTask };
		grunt.config('uglify', uglifyCfg);
		grunt.config('copy', copyCfg);
	});

	grunt.registerTask('versionreplace', 'replace version', function() {
		var reg = /<span class=\"ws-version\">[\d\.\-a-zA-Z]+<\/span>/g;
		var replace = '<span class="ws-version">'+ grunt.config('pkg').version +'</span>';
		grunt.file.expand({cwd: 'demos/', matchBase: true}, '*.html').forEach(function(path) {
			var code = grunt.file.read('demos/'+path);
			code = code.replace(reg, replace);
			grunt.file.write('demos/'+path, code);

		});
	});

	// Default task.
	grunt.loadTasks('grunt-tasks/');
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-bytesize');
	
	grunt.registerTask('default', ['webshimscombos', 'concat', 'sass', 'cfgcopymin', 'copy:main', 'cssmin', 'uglify', 'versionreplace', 'bytesize']);

	grunt.registerTask('dev', ['webshimscombos', 'concat', 'sass', 'cfgcopymin', 'copy:main', 'watch']);

	grunt.registerTask('release', ['versiontest', 'clean', 'default', 'compress', 'copy:archive', 'bytesize']);


	function getFiles(srcdir, destdir, wildcard, compareDir, compareMatch) {
		var path = require('path');
		var fs = require('fs');
		// In Nodejs 0.8.0, existsSync moved from path -> fs.
		var existsSync = fs.existsSync || path.existsSync;
		var files = {};
		grunt.file.expand({cwd: srcdir}, wildcard).forEach(function(relpath) {
			var src = path.join(srcdir, relpath);
			
			if(!compareDir || !compareMatch || !grunt.file.isMatch(compareMatch, src) || (!existsSync(path.join(compareDir, relpath)) || grunt.file.read(src) != grunt.file.read(path.join(compareDir, relpath)))){
				files[destdir === false ? relpath : path.join(destdir, relpath)] = src;
			}
		});
		return files;
	}
	
	
};
