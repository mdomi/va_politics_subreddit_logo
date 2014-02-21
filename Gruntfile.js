module.exports = function (grunt) {

    grunt.initConfig({
        svg2png: {
            all: {
                files: [
                    {
                        src: 'svg/*.svg',
                        dest: 'png/'
                    }
                ]
            }
        },
        image_resize: {
            logos_50 : {
                options: {
                    height: 50,
                    overwrite: true
                },
                files: {
                    'png/reddit-alien-text-50.png': 'png/reddit-alien-text.png',
                    'png/reddit-alien-50.png': 'png/reddit-alien.png'
                }
            },
            logos_100 : {
                options: {
                    height: 100,
                    overwrite: true
                },
                files: {
                    'png/reddit-alien-text-100.png': 'png/reddit-alien-text.png',
                    'png/reddit-alien-100.png': 'png/reddit-alien.png'
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js']
        },
        watch: {
            js: {
                files: ['Gruntfile.js'],
                tasks: ['jshint']
            },
            svg : {
                files: ['svg/*.svg'],
                tasks: ['svg2png', 'image_resize']
            }
        }
    });

    grunt.loadNpmTasks('grunt-svg2png');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-image-resize');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'svg2png', 'image_resize']);

};