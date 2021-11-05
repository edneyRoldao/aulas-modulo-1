let tipo = process.argv[2];

let lista = [1, 2, 3, 25, 47, 32, 64, 78, 99, 115, 125, 130, 1250, 7745, 3328];

switch(tipo) {
    case "p":
        let pares = [];

        for (i = 0; i < lista.length; i++) {
            let numero = lista[i];

            if (numero % 2 == 0) {
                pares.push(numero);
            }
        }
        console.log(pares);

        break;
    case "i":
        let impares = [];

        for (i = 0; i < lista.length; i++) {
            let numero = lista[i];

            if (numero % 2 != 0) {
                impares.push(numero);
            }
        }

        console.log(impares);
        break;

    default:
        console.log("opcao invalida");
        
}