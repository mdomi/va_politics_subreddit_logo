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
        watch: {
            svg : {
                files: ['svg/*.svg'],
                tasks: ['svg2png']
            }
        }
    });

    grunt.loadNpmTasks('grunt-svg2png');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['svg2png']);

};