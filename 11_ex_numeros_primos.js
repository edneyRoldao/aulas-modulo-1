
let numero = parseInt(process.argv[2]);

if (numero < 2) {
    console.log("NAO E UM NUMERO PRIMO");
    
} else if((numero % 2 == 0) && numero != 2) {
    console.log("NAO E UM NUMERO PRIMO");

} else if((numero % 3 == 0) && numero != 3) {
    console.log("NAO E UM NUMERO PRIMO");

} else if ((numero % 5 == 0) && numero != 5) {
    console.log("NAO E UM NUMERO PRIMO");

} else if ((numero % 7 == 0) && numero != 7) {
    console.log("NAO E UM NUMERO PRIMO");
    
} else if ((numero % 9 == 0)) {
    console.log("NAO E UM NUMERO PRIMO");
    
} else {
    console.log("### E UM NUMERO PRIMO");
}
