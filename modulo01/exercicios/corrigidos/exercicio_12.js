let comentario = "vai se fuder chaparral";

let blackList = ["caralho", "vai se fuder", "vai tomar no cu"];

for (i = 0; i < blackList.length; i++) {
    let palavraProibida = blackList[i];

    if (comentario.toLowerCase().includes(palavraProibida)) {
        console.log("Texto ofensivo");
    }
}

// se eu logo comentário em um else, aparece 3 vezes o comentário no terminal