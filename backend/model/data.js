const mongoose = require("mongoose");

const DataModel = mongoose.Schema({
   title: { type: String, required: true },
   description: { type: String, required: true },
   productId: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
});

module.exports = mongoose.model("data", DataModel);
