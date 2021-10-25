// String: parte1 - imutabilidade
// string é um array de caracteres

// exemplo de MUTAVEL
let lista = ["edy", "edn"];
lista.push("outro nome");
console.log(lista);

// transformar em maiusculo
let texto1 = "primeiro";
texto1 = texto1.toUpperCase();
console.log(texto1);


// transformar em minusculo
let texto2 = "PROGRAMACAO";
texto2 = texto2.toLowerCase();
console.log(texto2);

// onde usamos isso
let texto3 = "minhasenha";
let texto4 = "MinhaSenha";
console.log(texto3 == texto4); // false
console.log(texto3 == texto4.toLowerCase()); // true

// para saber o tamanho de uma string
console.log(texto3.length);
