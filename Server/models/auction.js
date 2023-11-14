const mongoose = require("mongoose");

const Auction = new mongoose.Schema(
  {
    walletaddre: {
      type: String,
      require: true,
    },
    pincode: {
      type: String,
      unique: true,
      require: true,
    },
    maxunit: {
      type: String,
      require: true,
    },
    minprice: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("auction", Auction);
