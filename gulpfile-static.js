var gulp        =   require("gulp");

gulp.task("default", function () {
    gulp.src("./src/assets/**/*.ico")
        .pipe(gulp.dest("dist/icons"));
    gulp.src("./src/assets/icons/**/*.svg")
        .pipe(gulp.dest("dist/icons"));
    return gulp.src("./src/preview/*.html")
        .pipe(gulp.dest("dist/"));
});

