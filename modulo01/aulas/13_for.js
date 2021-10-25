// iteracao, fluxo de repeticao, FOR

// for tem 3 estruturas

// p1: controle (ponto de inicio)
// p2: condicao de parada, nesse caso >= 10
// p3: sao os incrementos ou decrementos
for (i = 0; i < 10; i++) {
    console.log(i);  
}

// quando a condicao de parada nao for atendida, teremos um loop infinito
// for (i = 3; i > 2; i++) {
//     console.log(i);
// }

// exemplo com decremento
for (i = 10; i > 0; i--) {
    console.log(i);    
}

// for com lista
let frutas = ["banana", "maça", "acerola", "uva"];
for (i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    console.log(fruta);        
}

