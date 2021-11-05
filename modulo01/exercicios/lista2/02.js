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
