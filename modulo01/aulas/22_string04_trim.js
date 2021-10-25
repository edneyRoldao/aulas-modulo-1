// String: parte4 - trim
// remove os espacos de um texto do inicio e fim

let nome = "           Marjorie Roldao   ";
console.log(nome);

nome = nome.trim();
console.log(nome);

// onde usamos isso.
let n1 = "Marjorie     ";
let n2 = "Marjorie";
console.log(n1 == n2); // false
console.log(n1.trim() == n2.trim()); // true
