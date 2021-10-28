let dataNascimento = process.argv[2];
let dataAtual = new Date().toLocaleDateString("pt-br");

function getIdade(dtNascimento, dtAtual) {
    let anoAtual = parseInt(dtAtual.split("/")[2]);
    let anoNascimento = parseInt(dtNascimento.split("/")[2]);
    let mesAtual = parseInt(dtAtual.split("/")[1]);
    let mesNascimento = parseInt(dtNascimento.split("/")[1]);
    let diaAtual = parseInt(dtAtual.split("/")[0]);
    let diaNascimento = parseInt(dtNascimento.split("/")[0]);
    
    // conside que a pessoa já fez aniversario no ano atual
    let anos = anoAtual - anoNascimento;
    
    // verificando se já completou ano no ano atual
    if (mesNascimento > mesAtual) {
        anos--;
    
    } else if(mesNascimento == mesAtual && diaNascimento > diaAtual) {
        anos--;    
    }

    let totalDias = ((anos - 1) * 365) + (mesAtual * 30) + diaAtual;

    console.log("idade: ", anos);
    console.log("dias vida", totalDias);
}

getIdade(dataNascimento, dataAtual);