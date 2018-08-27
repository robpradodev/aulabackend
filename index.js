let entrada1 = process.argv[2];
let entrada2 = process.argv[3];


if (isNaN(entrada1) || isNaN(!entrada2)) {
    console.log('É necessário informar dois valores numéricos.');
} else {

    let soma = entrada1 + entrada2;

    console.log(soma);
}