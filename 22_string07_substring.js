// String: parte7 - substring
// para extrair um texto por um range de index.

let texto = "Joao das Couves";
console.log(texto.substring(0, 4)); // Joao
console.log(texto.substring(9)); // Couves

//////////////////////////////////////////////////////////////////////////

// onde usamos isso
function removerPreposicao(nome) {
    let index = nome.indexOf(" das ");

    // removendo o das
    if (index != -1) {
        let preposicao = nome.substring(index, index + 4);
        nome = nome.replace(preposicao, "");
    }

    index = nome.indexOf(" de ");

    if (index != -1) {
        nome = nome.substring(0, index) + nome.substring(index + 3);
    }

    console.log(nome);    
}

removerPreposicao("Roberto de Almeida das Roseiras");
