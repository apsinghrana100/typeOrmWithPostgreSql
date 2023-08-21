import express from "express";
import {Client} from '../entities/client'

const router = express.Router();


router.get("/api/fetchdata", (req, res) => {
    res.status(200).json({ msg: "successfully fetched" });
});

router.post("/api/addData",(async(req,res)=>{

    const {
        first_name,
        last_name,
        email,
        card_number,
        balance
    }=req.body;

    const client = Client.create({
        first_name,
        last_name,
        email,
        card_number,
        balance
    });
     await client.save();

    res.status(201).json({ msg: "Client added successfully" });
   

}));
module.exports = router;