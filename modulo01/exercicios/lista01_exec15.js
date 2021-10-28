let tipo = process.argv[2];
let qtdLitros  = parseInt(process.argv[3]);

function calcAlcool(quantidade) {
    let total = 2.90 * quantidade;

    if (quantidade <= 20) {
        total = total - (total * 0.03);
    } else {
        total = total - (total * 0.05);
    }

    console.log("alcool");
    console.log("total: ", total.toFixed(2));    
}

function calcGasolina(quantidade) {
    let total = 3.30 * quantidade;

    if (quantidade <= 20) {
        total = total - (total * 0.04);
    } else {
        total = total - (total * 0.06);
    }

    console.log("gasolina");
    console.log("total: ", total.toFixed(2));    
}

switch (tipo.toLowerCase()) {
    case "g":
        calcGasolina(qtdLitros); 
        break;
    case "a":
        calcAlcool(qtdLitros);
        break;
    default:
        console.log("opcao invalida");
}
