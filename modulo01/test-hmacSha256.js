const crypto = require('crypto');

let key = "abc123";
const body = { id: 10, price: 10.45, name: 'test product'};
let bodyAsString = JSON.stringify(body);

const hash = crypto
    .createHmac('sha256', key)
    .update(bodyAsString)
    .digest('hex');

console.log(hash);

