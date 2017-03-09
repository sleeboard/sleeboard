var gulp = require('gulp');
var concat = require('gulp-concat');
var jasmine = require('gulp-jasmine');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

var paths = {
    scripts: ['src/**/*.js'],
    //tests: ['spec/**/*.js']
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['dist']);
});

gulp.task('scripts', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(paths.scripts)
      .pipe(concat('src/js/sleeboard.js'))
      .pipe(uglify())
      .pipe(concat('sleeboard.min.js'))
      .pipe(gulp.dest('dist'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    //gulp.watch(paths.tests, ['test', 'scripts']);
});

/*gulp.task('test', function() {
    return gulp.src(paths.tests)
        // gulp-jasmine works on filepaths so you can't have any plugins before it
        .pipe(jasmine());
});*/
// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts']);
