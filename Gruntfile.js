module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.initConfig({
		sass: {
			dev: {
				options: {
					style: 'expanded' 
				}, 
				files: [{
					expand: true,
					cwd: 'src/scss',
					src: ['*.scss'],
					dest: 'src/css',
					ext: '.css'
				}]
			}
		}
	})

	grunt.registerTask('default', ['sass:dev'])
}
