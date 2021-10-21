let peso = 87.5;
let alt = 1.76;

let imc = peso / (alt * alt);
console.log(imc);

// arredonda o numero para duas casas decimais
imc = imc.toFixed(2);
console.log(imc);

// string para numero
let numberAsString = "10";
let n2 = parseInt(numberAsString);
console.log(n2);

// string(nao numero) para numero
let numberAsString2 = "asdfa";
let n3 = parseInt(numberAsString2);
console.log(n3); // NaN -> Not a Number
