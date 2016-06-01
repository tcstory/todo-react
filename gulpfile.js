/**
 * Created by tcstory on 5/11/16.
 */

var gulp = require('gulp');
var del = require('del');

gulp.task('assets', function () {
    return gulp.src('./assets/**')
        .pipe(gulp.dest('./src'))
});

gulp.task('clean', function () {
    return del(['./dist/**', '!./dist'])
});