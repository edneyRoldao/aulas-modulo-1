let peso = parseFloat(process.argv[2]);
let altura = parseFloat(process.argv[3]);

let imc = peso / (altura * altura);

console.log(imc);
