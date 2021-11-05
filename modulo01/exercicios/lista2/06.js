let input = process.argv[2];
let input2 = process.argv[3];
let input3 = process.argv[3];

let carros = ["honda", "toyota", "chevrolet", "ford"];

function buscarMarca(marca) {
    for (i = 0; i < carros.length; i++) {

        if (marca == carros[i]) {
            console.log("carro existe na lista");
            break;
        }
    
        if (i == carros.length - 1) {
            console.log("carro NAO existe na lista");                
        }
    
    }    
}

function buscarMarcaV2(marca) {
    for (i = 0; i < carros.length; i++) {

        if (marca == carros[i]) {
            return true;
        }
    
    }

    return false;
}


buscarMarca(input);
buscarMarca(input2);
buscarMarca(input3);
