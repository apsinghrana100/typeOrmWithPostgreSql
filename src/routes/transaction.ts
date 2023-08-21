import express from "express";


import {Transaction,TransactionTypes} from "../entities/transaction";
import { Client } from "../entities/client";

const router = express.Router();

router.post("/api/client/:client_id",(async(req,res)=>{

    const {client_id} = req.params;
    const {type,amount} = req.body;

    const client = await Client.findOne({
        where: {
          id: parseInt(client_id)
        }
      }); // Correct


     if(!client){
         return res.json({msg:"Client not found"})
     };

     const transaction =  Transaction.create({
        amount,
        type,
        client

     });

     await transaction.save();

     if(type=== TransactionTypes.DEPOSIT)
     {
        client.balance=client.balance+amount;
     }else if(type === TransactionTypes.WITHDRAW)
     {
        client.balance= client.balance - amount
     }

     await client.save();
     return res.status(200).json({msg:"Transaction successfully"})


}));

module.exports = router;