/**************************************
* Author: Kashif Iqbal Khan
* Email: kashiif@gmail.com
* Copyright (c) 2013 Kashif Iqbal Khan
**************************************/
module.exports = function(grunt) {
	
  var pkg = grunt.file.readJSON('package.json'),
	  distdir = 'dist/' + pkg.name + '-' + pkg.version + '/';
	 
  // Project configuration.
  grunt.initConfig({
	pkg: pkg,
	
	// Copy things to a distdir dir, and only change things in the temp dir
	copy: {
		prod: {
			files: [
				{expand: true, cwd: 'src/', src : ['chrome.manifest' ],  dest: distdir },
				{expand: true, cwd: 'src/', src : ['**/*.css','**/*.js','**/*.jsm', '**/*.xul', '**/*.png','**/*.jpg'],  dest: distdir },
				{expand: true, cwd: 'src/', src : ['**/*.dtd', '!**/*_amo_*.dtd', '**/*.properties'],  dest: distdir },
			]
		},
	},
	
	"string-replace": {
	  install_rdf: {
		src: 'src/install.rdf',
		dest: distdir + 'install.rdf',

		options: {
		  replacements: [
			  {
				pattern: /\<em\:version\>.+\<\/em\:version\>/g,
				replacement: "<em:version>" + pkg.version + "</em:version>"
			  },
			  {
				pattern: /\<em\:creator\>.+\<\/em\:creator\>/g,
				replacement: "<em:creator>" + pkg.author.name + "</em:creator>"
			  },
			  {
				pattern: /\<em\:homepageURL\>.*\<\/em\:homepageURL\>/g,
				replacement: "<em:homepageURL>" + pkg.homepage + "</em:homepageURL>"
			  },		  
			  {
				pattern: /\<em\:description\>.*\<\/em\:description\>/g,
				replacement: "<em:description>" + pkg.description + "</em:description>"
			  }
		  ]}
		}
	},
	
	compress: { 
		prod: { 
			options: {
			  archive: 'dist/<%=pkg.name%>-<%=pkg.version%>.xpi',
			  mode: 'zip'
			},
			files: [ { expand: true, cwd: distdir, src: '**/**' }]
		} 
	}
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.loadNpmTasks('grunt-string-replace');
  
  grunt.loadNpmTasks('grunt-contrib-compress');

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  
  // $: grunt bump
  grunt.loadNpmTasks('grunt-bump');

  // Default task(s).
  grunt.registerTask('default', ['copy:prod', 'string-replace', 'compress']);
  
};