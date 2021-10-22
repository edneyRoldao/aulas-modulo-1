// Expressões regulares.

function textoEstaValido(n) {

    for (i = 0; i < n.length; i++) {
        let char = n.charAt(i);

        if (char == "0") {
            return false;
        }

        if (char == "1") {
            return false;
        }

        if (char == "2") {
            return false;
        }

        if (char == "3") {
            return false;
        }

        if (char == "4") {
            return false;
        }

        if (char == "5") {
            return false;
        }

        if (char == "6") {
            return false;
        }

        if (char == "7") {
            return false;
        }

        if (char == "8") {
            return false;
        }

        if (char == "9") {
            return false;
        }

    } 

    return true;
}


function textoEstaValidoV2 (n) {
    let numeros = ["0", "1","2","3","4","5","6","7","8","9"];
 
    for (i = 0; i < n.length; i++) {        
        for(j = 0; j < numeros.length; j++) {
             if (n.charAt(i) == numeros[j]) {
                return false;
             }
        }
    }    

    return true;
}


// let resultado = textoEstaValidoV2("qwerasdfzxcvghjkhi1");
// console.log(resultado);


// validar formato de textos. Exp: email, cpf, cnpj.
let regex = /\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}/;

let r = regex.test("(11) 966439-1711");
// console.log(r);




function textoEstaValidoV3(n) {
    let regex = /^([^0-9]*)$/;
    console.log(regex.test(n));      
}

textoEstaValidoV3("fdgsdfgds");
