var gulp = require('gulp'),
sass = require('gulp-sass'),
cleanCSS = require('gulp-clean-css'),
rename = require('gulp-rename'),
runSequence = require('run-sequence');

gulp.task('sass', function() {
return gulp.src('app/styles/scss/styles.scss')
.pipe(sass())
.pipe(gulp.dest('app/styles/css/'));
});

gulp.task('minify-css', function() {
return gulp.src('app/styles/css/*.css')
.pipe(cleanCSS())
.pipe(rename({
  suffix: '.min'
}))
.pipe(gulp.dest('dist/styles/'))
});

gulp.task('watch', function(){
gulp.watch('app/styles/scss/**/*.scss', ['default']);
});

gulp.task('default', function(callback) {
runSequence('sass', 'minify-css', callback)
});