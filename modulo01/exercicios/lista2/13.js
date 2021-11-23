let frase = "Podemos já vislumbrar o modo pelo qual o consenso sobre a necessidade de qualificação auxilia a preparação e a composição das regras de conduta normativas.";
let fraseNova =  frase.replace(/a/g, "@");
fraseNova =  fraseNova.replace(/á/g, "@");
fraseNova =  fraseNova.replace(/ã/g, "@");

console.log(fraseNova);
