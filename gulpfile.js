/**
 * Created by tcstory on 5/11/16.
 */

var gulp = require('gulp');
var del = require('del');
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');


gulp.task('build', ['clean'], function () {
    return gulp.src('./src/pages/app/app.js')
        .pipe(gulpWebpack(require('./webpack.config.js'), webpack))
        .pipe(gulp.dest('dist/'))
});

gulp.task('auto', ['clean'], function () {
    var obj = require('./webpack.config.js');
    obj.watch = true;
    return gulp.src('./src/pages/app/app.js')
        .pipe(gulpWebpack(obj, webpack))
        .pipe(gulp.dest('dist/'))
});

gulp.task('clean', function () {
    return del(['./dist/**', '!./dist'])
});