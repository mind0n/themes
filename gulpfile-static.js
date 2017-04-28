var gulp        =   require("gulp");

gulp.task("default", function () {
    return gulp.src("./src/assets/**/*.ico")
        .pipe(gulp.dest("dist"));
});
