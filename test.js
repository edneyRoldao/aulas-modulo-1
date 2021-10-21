let peso = parseFloat(process.argv[2]);
let altura = parseFloat(process.argv[3]);

let imc = peso / (altura * altura);

console.log(imc);


/**
 * String
 * 
 * Crie um algoritmo que verifica se um texto é um palíndromo.
 * 
 */

 /**
 * String
 * 
 * Crie uma metodo que vefica se uma palavra e maior que a outra
 * (lexicograficamente)
 */


 
 /*
    Example:
    lista: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    1 = [0, 1, 2, 3, 4]
    2 = [5, 6, 7, 8, 9]
    3 = [10, 11, 12, 13, 14]
    4 = [15, 16, 17, 18, 19]
    5 = [20]
*/

let nomes = [
    'nadine',
    'marjorie',
    'giselle',
    'edney',
    'draco',
    'dona neuza',
    'seu joao',
    'gustavo',
    'thor',
    'lucas',
    'fillipe',
    'marilene',
    'thabita',
    'biba',
    'tio da sukita',
    'gabriel',
    'daniel',
    'pietra',
    'enzo',
    'galinha do céu',
    'giovanna'
];

function listarPaginado(lista, pagina, itensPorPagina) {
    let indexFinal = pagina * itensPorPagina;
    let indexInicial = indexFinal - itensPorPagina;

    let listaPaginada = lista.slice(indexInicial, indexFinal);

    listaPaginada.forEach(item => console.log(item));
}

listarPaginado(nomes, 1, 100);