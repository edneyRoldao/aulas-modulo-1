let input = process.argv[2] + "";

let token = input.split(" ");

let iniciaisNome = "";

for (i = 0; i < token.length; i++) {
    let p = token[i].toUpperCase();

    if (p == "DE" || p == "DA" || p == "DO" || p == "DAS" || p == "DOS") {
        continue;
    }

    iniciaisNome += p.substring(0, 1);
}

console.log(iniciaisNome);
