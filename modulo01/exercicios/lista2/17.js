let input = process.argv[2] + "";

let texto = "Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a execução dos pontos do programa exige a precisão e a definição de todos os recursos funcionais envolvidos.";

function contadorLetras(letra) {
    let contador = 0;

    for (i = 0; i < texto.length; i++) {
        if (letra == texto.charAt(i)) contador++;
    }

    return contador;
}

let total = contadorLetras(input);
console.log(total);
