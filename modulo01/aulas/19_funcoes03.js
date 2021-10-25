
// PARTE 3 - funcoes com retorno

function calcularPorcentagemSalarioSobreParcela(salario, parcela) {
    let resultado = (parcela * 100) / salario;
    return resultado;
}

let percSalario = calcularPorcentagemSalarioSobreParcela(1000, 400);

if (percSalario > 30) {
    console.log("financiamento nao foi aprovado");
} else {
    console.log("financiamento aprovado");
}

