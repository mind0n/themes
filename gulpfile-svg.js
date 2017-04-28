var gulp        =   require("gulp");
var svg         =   require("gulp-svg-symbols");

gulp.task("default", function () {
    return gulp.src("./src/**/*.svg")
        .pipe(svg())
        .pipe(gulp.dest("dist"));
});

gulp.task("prod", function () {
    return gulp.src("./src/**/*.svg")
        .pipe(svg())
        .pipe(gulp.dest("dist"));
});
