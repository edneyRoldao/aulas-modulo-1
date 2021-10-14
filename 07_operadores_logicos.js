// operadores logicos
let n1 = 35;
let n2 = 15;

// 1: &&
let resultado = n1 > n2 && n2 < n1; // true
console.log(resultado);

// 2: ||
resultado = n1 > n2 || n2 > n1; // true
console.log(resultado);

// 2: ! (inverte o resultado de uma expressao)
resultado = !n1 > n2; // false
console.log(resultado);

resultado = !n1 > n2 || n2 > n1; // false
console.log(resultado);

resultado = !(20 > 30 && 30 == 31) || (40 == 25 && 13 != 14); // true
console.log(resultado);
