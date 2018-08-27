const fs = require('fs');

function _sortear(quantidade, maximo) {
    let dezenas = [];
  
    console.time('Sorteando');
  
    for (let numero = 1; numero <= maximo;  numero++) {
      dezenas.push(numero);
    
    
    dezenas.sort(function randomizar(a, b) {
      return Math.random() * 2 - 1;
    });
  
    for(let numeros of dezenas){
        if(numeros<10){
            dezenas[numeros]=`0${numeros}`;
        }
    }
    }
    console.timeEnd('Sorteando');
    
    return dezenas.splice(0, quantidade);
  }
  
  console.log(_sortear(6, 60).join('-'));

fs.writeFile('megasena.txt', '\n'+ _sortear(6,60)+'\n', {flag:'a'}, function(errow) {
    if(errow){
        console.log('Não foi possível gravar');
    }else{
        console.log('O arquivo foi gravado');
    }
});

fs.readFile('megasena.txt', function(errow, data) {
    if(errow){
        console.log('Arquivo não existe');
    }else{
        console.log('Arquivo encontrado');
        console.log(data);
    }
});

