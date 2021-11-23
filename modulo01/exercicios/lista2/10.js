let input = process.argv[2] + "";

function isPalindromo(palavra) {
    let palavraInvertida = "";

    for (i = palavra.length - 1; i >= 0; i--) {
        let letra = palavra.charAt(i);
        palavraInvertida += letra;
    }

    if (palavra == palavraInvertida) {
        console.log("e palindromo");
        
    } else {
        console.log("NAO e palindromo");
    }
}

isPalindromo(input);
