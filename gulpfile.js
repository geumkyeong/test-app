var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('build', function() {
    var src = ['src/*.js'];

    return gulp.src(src)
            .pipe(uglify())
            .pipe(gulp.dest('all.js'))
});