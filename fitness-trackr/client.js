const { Client } = require ('pg');
const client=  new Client('postgres://localhost:8080/');

client.connect();
console.log('CONNECTED TO THE DB');