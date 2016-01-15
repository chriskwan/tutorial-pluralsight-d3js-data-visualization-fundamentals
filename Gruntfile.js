'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            options: {
                livereload: true // default port: 35729
            }, 
            all: {
                files: ['**/*']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};
