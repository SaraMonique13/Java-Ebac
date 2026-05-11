const gulp = require('gulp');

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
