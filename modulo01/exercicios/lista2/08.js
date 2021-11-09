let listaFibinacci = [0, 1];

for (i = 1; (listaFibinacci[i] + listaFibinacci[i-1]) < 1000; i++) {
    let n = listaFibinacci[i] + listaFibinacci[i -1];
    listaFibinacci.push(n);
}

console.log(listaFibinacci);
