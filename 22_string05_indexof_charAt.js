// String: parte5 - indexof e charAt

let carro = "fusca";

// obter um caracter a partir da posicao dele
console.log(carro.charAt(1));

// obter o index a partir de um caracter
console.log(carro.indexOf('c'));

// obter o index a partir de um texto
console.log(carro.indexOf("sca"));

// quando o texto ou caracter nao estiver presente na string, ele retorna -1
console.log(carro.indexOf("txt"));

// onde usamos isso
let nomeInvertido = "";
let nome = "Edney de Souza";

for (i = nome.length - 1; i >= 0; i--) {
    nomeInvertido += nome.charAt(i);
}

console.log(nomeInvertido);
