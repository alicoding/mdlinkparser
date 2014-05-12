/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        esnext: true,
        indent: 2,
        expr: true,
        camelcase: true,
        curly: true,
        eqeqeq: true,
        newcap: true,
        unused: true,
        trailing: true,
        browser: true,
        node: true
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['lib/*']
      },
      tests: {
        src: ['test/*']
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },
    less: {
      build: {
        files: {
          'css/style.css': 'less/style.less'
        },
        options: {
          sourceMap: true
        }
      },
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');

  // Default task.
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('build', ['less:build']);


};
