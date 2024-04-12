const { Client } = require ('pg');
const client =  new Client('posgres://localhost8080/fitness_trkr');

client.connect();
console.log('CONNECTED TO THE DB');

module.exports;{
   client 
  };
