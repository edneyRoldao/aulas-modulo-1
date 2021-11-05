let numeros = [1, 37, 125, 5, 42, 39, 666, 69, 67];

for (i = 0; i < numeros.length; i++) {
    let n = numeros[i];

    if (isCousin(n)) {
        console.log(n);        
    }
}

function isCousin(numero) {
    if (numero < 2) {
        return false;
        
    } else if((numero % 2 == 0) && numero != 2) {
        return false;
    
    } else if((numero % 3 == 0) && numero != 3) {
        return false;
    
    } else if ((numero % 5 == 0) && numero != 5) {
        return false;
    
    } else if ((numero % 7 == 0) && numero != 7) {
        return false;
        
    } else if ((numero % 9 == 0)) {
        return false;
        
    } else {
        return true;
    }    
}
