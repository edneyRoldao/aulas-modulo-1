let requestSignature = '9efefb1d9c77c319d3d0bbe463d68377f1279af524aeb9a92f197f9d48bae2a';
let generatedSignature = '09efefb1d9c77c319d3d0bbe463d68377f1279af524aeb9a92f197f9d48bae2a';

console.log(requestSignature.length);
console.log(generatedSignature.length);

generatedSignature = generatedSignature.substring(1);
console.log(generatedSignature.length);
