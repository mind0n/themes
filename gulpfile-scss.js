var gulp        =   require("gulp");
var sass        =   require("gulp-sass");
var mcss        =   require("gulp-clean-css");

gulp.task("default", function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task("prod", function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(mcss({compatibility:"ie8"}))
        .pipe(gulp.dest('./dist'));
});