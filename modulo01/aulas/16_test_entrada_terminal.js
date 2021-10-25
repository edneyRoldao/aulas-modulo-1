
// comando iniciar projeto node: npm init
// nao esquecer do package.json na estrutura dos arquivos
// comando para instalar: npm install prompt-sync

let prompt = require("prompt-sync")();

let nome = prompt("qual e o seu nome?");

console.log("MEU NOME E: ", nome);

