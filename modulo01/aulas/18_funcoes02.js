
// PARTE 2 - funcoes com parametros

// usando como exemplo o IMC
function calcularIMC(nome, peso, altura) {
    let imc = peso / (altura * altura);
    console.log(nome + " - seu imc: ", imc);    
}

calcularIMC("Edney", 87.5, 1.76);
calcularIMC("Nadine",60.4, 1.55);
