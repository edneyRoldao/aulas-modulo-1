// metodos recursivos
/*
    1 - funcao que invoca si mesma
    2 - deve ter uma condicao que determina o fim da chamada recursiva.
    3 - utiliza o conceito de pilha
*/
function fatorial(n) {
    for (i = n-1; i >= 1; i--) {        
        n *= i;
    }

    return n;
}

let r = fatorial(5);
console.log(r);


// 5 * 4 * 3 * 2 * 1
function fatorialRecursivo(n) {
    if (n == 1) {
        return n;
    }

    return n * fatorialRecursivo(n - 1);
}

let r2 = fatorialRecursivo(5);
console.log(r2);
