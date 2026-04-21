const router = require("express").Router();
const Order = require("../models/Order");

router.post("/", async (req,res)=>{
  const order = await Order.create(req.body);
  res.json(order);
});

router.get("/", async (req,res)=>{
  const orders = await Order.find().sort({createdAt:-1});
  res.json(orders);
});

router.put("/:id", async (req,res)=>{
  await Order.findByIdAndUpdate(req.params.id,{status:"Paid"});
  res.send("Updated");
});

module.exports = router;
