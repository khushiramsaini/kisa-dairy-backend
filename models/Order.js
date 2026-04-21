const mongoose = require("mongoose");

module.exports = mongoose.model("Order", {
  items: Array,
  amount: Number,
  status: String,
  payment_id: String,
  createdAt: { type: Date, default: Date.now }
});
