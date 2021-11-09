// saparete odd from even - corrigido

let tipo = process.argv[2];

let lista = [11, 22, 333, 4444, 55555, 66666, 77777, 888888, 99999999, 10837493, 1198763826];

switch(tipo) {
    case "p" :
        let pares = [];

        for (i = 0; i < lista.length; i++); {
            if (lista[i] % 2 == 0) pares.push(lista[i]);
        }    
        console.log(pares);
        break;

    case "i":

        let impares = [];

        for (i = 0; i < lista.length; i++); {
            if (lista[i] % 2 != 0) 
                impares.push(lista[i]);
            
        }
        console.log(impares);

         break;

    default:

        console.log("opção invalida");

}