const fs = require('fs');

fs.writeFile('teste.txt', 'Hello', function(errow) {
    if(errow){
        console.log('Não foi possível gravar');
    }else{
        console.log('O arquivo foi gravado');
    }
});