'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    typescript: {
      app: {
        src: ['app/**/*.ts'],
        options: {
          module: 'commonjs',
          sourcemap: true
        }
      }
    }
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-typescript');

  // Default task
  grunt.registerTask('default', ['typescript']);
};
