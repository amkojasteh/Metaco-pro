module.exports = function(grunt) {
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
	  uglify:{
		  build:{
			  files:{
				  'js/app.js':['js/app.js'],
				  'js/all.js':['js/all.js'],
				  'js/bootstrap.js':['js/bootstrap.js'],
				  'js/fontawesome.js':['js/fontawesome.js'],
				  'js/timer.js':['js/timer.js'],
				 
			  }
		  }
	  }
		
		
   });
   grunt.loadNpmTasks('grunt-contrib-uglify');

   // Default task(s).
   grunt.registerTask('default', ['uglify'])
}