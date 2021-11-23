let palavra = process.argv[2]+ "";

palavra = palavra.substring(0, 1).toUpperCase() + palavra.substring(2).toLowerCase();

console.log(palavra);