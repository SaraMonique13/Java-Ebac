const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate =  require('gulp-obfuscate');//torna os caracteres ilegivel para outros


function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        style: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}


//publica
function padrao(callback){
    setTimeout (function(){
        
        console.log("Executando via gulp");
        return callback();
    }, 2000);
}



function dizOi(callback){
    console.log("Olá gulp");
    dizTchau();
    return callback();
}

//privada- não recebe o callback- posw utilizar dentro de outras tarefas
function dizTchau(){
    console.log("Tchau gulp")
}

exports.default = gulp.parallel(padrao, dizOi);
exports.dizOi = dizOi; 
exports.sass = compilaSass;
exports.watch = function(){
    gulp.watch('./source/styles/*.scss',{ignoreInitial:false}, gulp.series(compilaSass));
}
exports.javascript = comprimeJavaScript;
