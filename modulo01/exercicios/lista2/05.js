let lista1 = [1, 2, 3, 4, 5, 25, 30];
let lista2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let listaFinal = [];

for (i = 0; i < lista1.length; i++) {
    let numero = lista1[i];

    if (!listaFinal.includes(numero)) {
        listaFinal.push(lista1[i]);
    }

}

for (i = 0; i < lista2.length; i++) {
    let numero = lista2[i];

    if (listaFinal.includes(numero)) {
        continue;
    }

    listaFinal.push(lista2[i]);
}

console.log(listaFinal);
