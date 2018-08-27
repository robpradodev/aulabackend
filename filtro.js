const fs = require('fs');

const dados = require('./dados.json');

const country = process.argv[2];

let dadosCsv = 'name;company;contry\n';

const dadosFiltrados = [];

for(let pessoa of dados){
    if(pessoa.country === country){
        dadosFiltrados.push(pessoa);
        dadosCsv = '$'
}
}

let dadosFiltradosString = JSON.stringify(dadosFiltrados);

fs.writeFile('dados-filtrados.json', dadosFiltradosString, function(deuMerda){
    if(deuMerda){
        console.log('Deu merda');
        console.log(deuMerda)
        return;
    }

        console.log('Foram gravados', dadosFiltrados.length + ' registros');


});