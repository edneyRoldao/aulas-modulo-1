
// PARTE 4 - funcoes com return

function calcularPorcentagemSalarioSobreParcela(salario, parcela) {
    let resultado = (parcela * 100) / salario;

    if (resultado > 30) {
        return "financiamento nao foi aprovado";
    } 

    return "financiamento aprovado";
}

let resposta = calcularPorcentagemSalarioSobreParcela(1000, 300);

console.log(resposta);
