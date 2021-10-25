// String: parte6 - includes
// verificar um texto dentro da string

let comentario = "produto bom pra caralho";
console.log(comentario.includes("caralho"));

// indo podemos usar isso
let blackList = ["caralho", "vai se fuder", "vai tomar no cu"];

console.log("ANTES: ", comentario);

for (i = 0; i < blackList.length; i++) {
    let palavraProibida = blackList[i];

    if (comentario.toLowerCase().includes(palavraProibida)) {
        comentario = comentario.replace(palavraProibida, "");
    }
}

console.log("DEPOIS: ", comentario);
