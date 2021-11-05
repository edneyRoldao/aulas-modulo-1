let lista = [1, 2, 3, 25, 47, 32, 64, 78, 99, 115, 125, 10000, 130, 1250, 7745, 3328];

if (lista.length > 0) {
    let numeroMaior = lista[0];

    for (i = 0; i < lista.length; i++) {
        let numero = lista[i];
    
        if (numero > numeroMaior) {
            numeroMaior = numero;
        }
        
    }
    
    console.log(numeroMaior);    

} else {
    console.log("a lista esta vazia");    
}
