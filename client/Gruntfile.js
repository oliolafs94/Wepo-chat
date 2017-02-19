
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    tslint: {
      src: ['src/**/*.ts'],
      gruntfile: ['Gruntfile.js'],
      options: {
      	"indent": ["error", 4],
        configuration: "tslint.json",
        force: true,
        fix: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-tslint');
  grunt.registerTask('default', ['tslint']);
};