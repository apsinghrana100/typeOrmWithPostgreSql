import express from "express";
import {Banker} from '../entities/bankers'

const router = express.Router();


router.get("/api/fetchBankerData", (req, res) => {
    res.status(200).json({ msg: "successfully fetched" });
});

router.post("/api/addDataBanker",(async(req,res)=>{

    const {
        first_name,
        last_name,
        email,
        card_number,
        employee_number
    }=req.body;

    const banker =Banker.create({
        first_name,
        last_name,
        email,
        card_number,
        employee_number
    });
      await banker.save();

    res.status(201).json({ msg: "Banker added successfully" });
   

}));
module.exports = router;