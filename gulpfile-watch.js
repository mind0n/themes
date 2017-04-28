var gulp    =   require('gulp');
var shell   =   require('gulp-shell');

gulp.task("default", function(){
    gulp.watch(["./src/**/*.*"], ["trigger"]);
});
gulp.task("trigger", shell.task(['gulp --gulpfile gulpfile.js']));
