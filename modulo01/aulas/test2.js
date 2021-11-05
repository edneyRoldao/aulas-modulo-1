let numero = process.argv[2];

function isPar(n) {
    return n % 2 == 0;
}

function isImpar(n) {
    return !isPar(n);
}

console.log(isPar(numero));
console.log(isImpar(numero));
