const gulp = require('gulp');
const sass =require ('gulp-sass')(require('sass')); //compilador sass
const uglify = require('uglify');

function compilaSass(){
    return gulp.src('./source/style/main.scss')
    .pipe(sass({
        style: 'compressed'
    }))
    .pipe(gulp.dest('./build/style'));
}

exports.sass = compilaSass; 
exports.default = function(){
    gulp.watch('./source/style/*.scss', {ignoreInitial:false}, gulp.series(compilaSass));
}