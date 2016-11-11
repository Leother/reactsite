/**
 * Created by admin on 2016/10/18.
 */
var gulp = require("gulp");
var uglify = require("gulp-uglify");
var template = require("gulp-template");
var webpack = require("webpack");
var webpack_config = require("./webpack.config");
var minify = require("gulp-minify-css");
var connect = require("gulp-connect");
var livereload = require("gulp-livereload");
var gutil = require('gulp-util');
gulp.task("webpack",function () {
    webpack(webpack_config,function (err,start) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", 'webpack is  OK!');

    })
})

gulp.task("connect",function () {
    connect.server({
        root:"./",
        port: 8000,
        livereload:true
    })
})

gulp.task("html",function () {
    gulp.src("./src/css/*.css")
        .pipe(minify())
        .pipe(gulp.dest("./app/css"))
    gulp.src(["./src/js/module/*/*.*","./src/js/module/*/*/*.*"])
        .pipe(gulp.dest("./app/js/module"))
    gulp.src("./src/js/facility/*.*")
        .pipe(gulp.dest("./app/js/facility"))
})

gulp.task("watch", function() {
    livereload.listen();
    gulp.watch('src/**/*.js', ['webpack']).on('change', livereload.changed);
    gulp.watch('src/**/*.css', ['webpack']).on('change', livereload.changed);
    gulp.watch('src/**/*.html', ['webpack']).on('change', livereload.changed);
});

gulp.task('default', [ 'webpack','html'], function() {
    gulp.start(['connect', 'watch']);
});
