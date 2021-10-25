// Aula fluxo switch

let tipoAssinatura = 'banana';

// só aceita string e numeros inteiros.
// não usar números decimais
switch (tipoAssinatura) {
    case 'PREMIUM':
        console.log('a assinatura do usuario é PREMIUM');
        break;  
    case 'PLUS':
        console.log('a assinatura do usuario é PLUS');
        break;
    case 'NORMAL':
    case 'PE_DESCALCO':        
        console.log('a assinatura do usuario é NORMAL');
        break;
    default:
        console.log('vc nao tem assinatura. Deseja contratar?');
}

