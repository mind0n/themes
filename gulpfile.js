var gulp        =   require("gulp");
var runSequence =   require('run-sequence');

var reg         =   require('gulp-task-register');
reg([
    'cleaning'
    , 'static'
    , 'font'
    , 'scss'
    , '_host'
    , '_watch:css'
    , '_watch:html'
]);
gulp.task("default", function(done){
    runSequence('scss', 'font', 'static', function() {
        done();
    });
});

gulp.task("prod", function(done){
    runSequence('cleaning', 'scss:prod', 'font', 'static', function() {
        done();
    });
});

