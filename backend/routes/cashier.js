const express = require("express");
const router = express.Router();

const {Order} = require("../models/order");


//change food status
//view all orders

router.get("/orderHistory",async(_req, res) => {
    try {
        const orders = await Order.find({})
            .sort({date : 1})
            .lean();
    
        res.send(orders);
    }
    catch(ex) {
        res.status(500).send('Server Error.');
    }
});

module.exports = router;