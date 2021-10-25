// aula lista de dados - ARRAY

// definindo uma lista vazia
let lista = [];

// criando lista de numeros
let numeros = [10, 20, 30, 40];

// criando lista de nomes
let nomes = ["Edney", "Ednan", "Erik", "Gustavo"];
console.log(nomes);

// como acessar um elemento de um array?
// pelo posicao dele.
// o primeiro elemento inicia no posicao zero
let firstName = nomes[0];
console.log(firstName);

let lastName = nomes[3];
console.log(lastName);

// como saber o tamanho de um array
console.log(nomes.length);

// como adicionar um elemento no final do array
nomes.push("Lucas");
console.log(nomes);

nomes.splice(1, 1);