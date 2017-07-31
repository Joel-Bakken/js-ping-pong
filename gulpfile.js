var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');


gulp.task('myTask', function(){
    // I am the inner anonymous function that is a parameter of gulp.task()!
  console.log('hello gulp');
});

//more dependencies will be added here.


gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/pingpong-interface.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});
