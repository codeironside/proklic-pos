const mongoose = require("mongoose");

const payment_reaonsSchema = mongoose.Schema(
  {
    pmscmodules: { type: mongoose.Schema.Types.ObjectId, ref: "Pmscmodules" },
    View: { type: Boolean, default: false, required: true },
    Edit: { type: Boolean, default: false, required: true },
    Delete: { type: Boolean, default: false, required: true },
    Add: { type: Boolean, default: false, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("payment_reasons", payment_reaonsSchema);