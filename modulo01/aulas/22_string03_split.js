// String: parte3 - split
// usamos para transformar string em array

let carros = "gol,celta,corsa,punto lixo";
let carrosLista = carros.split(",");
console.log(carrosLista);

/*
    onde usamos isso
    - contas.txt
    formato:
    01;001;1234;edney roldao;1500.45
    01;001;1234;edney roldao;1500.45
    01;001;1234;edney roldao;1500.45
    01;001;1234;edney roldao;1500.45
    01;001;1234;edney roldao;1500.45
    01;001;1234;edney roldao;1500.45
    01;001;1234;edney roldao;1500.45
*/

let texto = "01;001;1234;edney roldao;1500.45";
let dadosConta = texto.split(";");

console.log("id da conta: ", dadosConta[0]);
console.log("agencia da conta: ", dadosConta[1]);
console.log("Cliente: ", dadosConta[2]);
