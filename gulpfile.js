var gulp        =   require("gulp");
var shell       =   require('gulp-shell');
var clean       =   require('gulp-clean');
var runSequence =   require('run-sequence');


gulp.task("default", function(done){
    runSequence('cleaning', 'scss', 'svg', 'static', function() {
        done();
    });
});

gulp.task("prod", function(done){
    runSequence('cleaning', 'scss:prod', 'svg:prod', 'static', function() {
        done();
    });
});

gulp.task("scss", shell.task(['gulp --gulpfile gulpfile-scss.js']));
gulp.task("scss:prod", shell.task(['gulp prod --gulpfile gulpfile-scss.js']));
gulp.task("svg", shell.task(['gulp --gulpfile gulpfile-svg.js']));
gulp.task("svg:prod", shell.task(['gulp prod --gulpfile gulpfile-svg.js']));
gulp.task("static", shell.task(['gulp --gulpfile gulpfile-static.js']));

gulp.task('cleaning', function(){
    return gulp.src('./dist', {read:false}).pipe(clean());
});

/*
gulp.task("compile:ts", shell.task(['gulp --gulpfile gulpfile-ts.js']));
gulp.task("compile:ts:prod", shell.task(['gulp prod --gulpfile gulpfile-ts.js']));
gulp.task("host", shell.task(['gulp --gulpfile gulpfile-host.js']));
gulp.task("watch", shell.task(['gulp --gulpfile gulpfile-watch.js']));
gulp.task("watch:assets", shell.task(['gulp assets --gulpfile gulpfile-watch.js']));
*/



