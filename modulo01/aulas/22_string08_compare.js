/*
    Aula localeCompare
    usado para comparar um texto forma lexicográfica.
    -1 = a palavra vem antes
     0 = a palavra e igual
     1 = a palavra vem depois
*/

let r = "edney".localeCompare("nadine");
console.log(r);

r = "nadine".localeCompare("edney");
console.log(r);

r = "nadine".localeCompare("nadine");
console.log(r);


// onde usamos - ordenacao de lista
let nomes = ["edney", "gustavo", "erik", "ricardo", "ednan", "Lucas", "lucas"];

for (i = 0; i < nomes.length - 1; i++) {

    for (j = i+1; j < nomes.length; j++) {
        let nome = nomes[i];
        let nomeComparacao = nomes[j];

        if (nome.localeCompare(nomeComparacao) == 1) {
            console.log("houve troca");
            nomes[i] = nomeComparacao
            nomes[j] = nome;
        }

    }
    
}

console.log(nomes);
