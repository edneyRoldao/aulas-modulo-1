/*
    - adicionar 10% a mais da area pois existe perda
    - lata faz 108m2, valor = 80
    - galao faz 21.6m2, valor = 25
    - arredondar para cima
    - a) total latas
    - b) total galoes
    - c) a mistura dos dois pensando na economia
        - 
 */
let area = parseInt(process.argv[2]);

// add 10%
// areaTotal += (area * 0.1);
// console.log("area total: ", areaTotal);

function calculoLatas(areaTotal) {
    console.log("############################");
    console.log("Inicio Calculo latas");
    console.log("############################");
    
    // total latas 
    let totalLatas = areaTotal / 108;

    // arredondamento
    totalLatas = totalLatas.toFixed(0);
    let falta = areaTotal - (totalLatas * 108);
    console.log("falta", falta);

    if (falta > 0) {
        totalLatas++;
    }

    console.log("total latas: ", totalLatas);

    console.log("############################");
    console.log("fim Calculo latas");
    console.log("############################");

    return totalLatas;
}

function calculoGaloes(areaTotal) {
    console.log("############################");
    console.log("Inicio Calculo galoes");
    console.log("############################");
    
    // total galoes 
    let total = areaTotal / 21.6;

    // arredondamento
    total = total.toFixed(0);
    let falta = areaTotal - (total * 21.6);
    console.log("falta", falta);

    if (falta > 0) {
        total++;
    }

    console.log("total galoes: ", total);

    console.log("############################");
    console.log("fim Calculo galoes");
    console.log("############################");

    return total;
}

function calculoLatasEGaloes(area) {
    let areaLata = 108;
    let areaGalao = 21.6;
    let latas = 0;
    let galoes = 0;
    
    while (area >= (areaGalao * 3)) {
        area = area - areaLata;
        latas++;
    }
    
    if (area > 0) {
        galoes = calculoGaloes(area);
    }

    console.log("total latas: " + latas + " - total galoes: " + galoes);    
}

let totG = calculoGaloes(area);
let totL = calculoLatas(area);

console.log("total latas a serem compradas: ", totL);
console.log("total galoes a serem comprados: ", totG);
calculoLatasEGaloes(area);