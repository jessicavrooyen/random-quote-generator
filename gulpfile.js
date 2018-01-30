const gulp = require('gulp'),
		cleanCSS = require('gulp-clean-css'),
	  browserSync = require('browser-sync').create();


// Static server & watch css, html, JS files
gulp.task('watch', ['css', 'scripts'], function() {

browserSync.init({
server: '.'
});

gulp.watch('css/*.css', ['css'], browserSync.reload);
gulp.watch('./*.html').on('change', browserSync.reload);
gulp.watch('js/*.js', ['scripts'], browserSync.reload);

});

// Watch css file destination
gulp.task('css', function() {
return gulp.src('./css/*.css')
.pipe(gulp.dest('./css'))
.pipe(browserSync.stream());
});

// Watch javascripts files
gulp.task('scripts', function() {
	return gulp.src('./js/*.js')
	.pipe(gulp.dest('./js'))
	.pipe(browserSync.stream());
});

gulp.task('default', ['watch']);

