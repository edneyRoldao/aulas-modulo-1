
let frutas = ["banana", "maça", "acerola", "uva"];

// exemplo break (serve para interromper o processamento do for)
for (i = 0; i < frutas.length; i++) {
    console.log(i);    

    if (frutas[i] == "banana") {
        console.log("encontrou: ", frutas[i]);
        break;
    }
}

console.log();
console.log("######### exemplo continue");

// exemplo continue (serve para pular uma determinada iteracao)
for (i = 0; i < frutas.length; i++) {
    if (frutas[i] == "acerola") {
        continue;
    }

    console.log(frutas[i]);    
}

