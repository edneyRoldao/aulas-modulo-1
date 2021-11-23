let input = process.argv[2] + "";

let rgRegex = /^[0-9]{2}.[0-9]{3}.[0-9]{3}-[0-9]{1}$/;
let cpfRegex = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/;
let cnpjRegex = /^[0-9]{2}.[0-9]{3}.[0-9]{3}\/[0-9]{4}-[0-9]{2}$/;


if (rgRegex.test(input)) {
    console.log("RG");
    
} else if(cpfRegex.test(input)) {
    console.log("CPF");
    
} else if(cnpjRegex.test(input)) {
    console.log("CNPJ");
    
} else {
    console.log("formato invalido"); 
}
