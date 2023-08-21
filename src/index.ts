const { createConnection } =require("typeorm");

const { Client} = require("./entities/client");
const { Banker} = require("./entities/bankers");
const { Transaction} = require("./entities/transaction")
const server = require('../server');


console.log(Transaction);
console.log(Banker);

exports.main = async() =>{
    try {
        const connection = await createConnection({
            type: "postgres",
            host:"localhost",
            port:5432,
            username :"postgres",
            password:123,
            database:"typeorm",
            entities:[Client,Banker,Transaction],
            synchronize : true
        })
        // server.databaseServer();
        
        
    } catch (error) {
        console.error(error);
        throw new Error("Unable to connect to db");
    }
    
}
//  main();