module.export = function(grunt) {

	// Project configuration
	var taskConfig = {
		pgk: grunt.file.readJSON('package.json'),
		tslint:  {
			src: ['src/**/*.ts'],
			gruntfile: ['Gruntfile.js'],
			options: {
				configuration: "tslint.json",
				force: true,
				fix: false
			},
		}
	};
	grunt.initConfig(taskConfig);
	grunt.registerTask('default', ['tslint']); 
	//grunt.registerTask('default', ['tslint']);
	grunt.loadNpmTask('grunt-tslint');
};