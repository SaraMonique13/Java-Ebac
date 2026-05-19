const gulp = require('gulp');
const sass =require ('gulp-sass')(require('sass')); //compilador sass
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compilaSass(){
    return gulp.src('./source/style/main.scss')
    .pipe(sass({
        style: 'compressed'
    }))
    .pipe(gulp.dest('./build/style'));
}

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
}

function comprimeImagem(){
    return gulp.src('./source/images/*.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}


exports.default = function(){
    gulp.watch('./source/style/*.scss', {ignoreInitial:false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial:false}, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*.jpg', {ignoreInitial:false}, gulp.series(comprimeImagem));
}