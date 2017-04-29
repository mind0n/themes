var gulp        = require("gulp");
var iconfont    = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

var fontName = "font-wolf"

//https://github.com/backflip/gulp-iconfont-css
var fontCssSettings = {
    fontName: fontName,
    targetPath: '../css/' + fontName + '.css',
    fontPath:'../font/'
};

gulp.task("default", function () {
    return gulp.src("./src/assets/font/*.svg")
        .pipe(iconfontCss(fontCssSettings))
        .pipe(iconfont({
            fontName:fontName
            , prependUnicode: false // recommended option 
            , formats: ['ttf', 'eot', 'woff', 'svg', 'woff2']
        }))
        .pipe(gulp.dest("dist/font"));
});

