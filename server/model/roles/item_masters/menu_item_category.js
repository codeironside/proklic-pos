const mongoose = require("mongoose");

const menu_item_categorySchema = mongoose.Schema(
  {
    pmscmodules: { type: mongoose.Schema.Types.ObjectId, ref: "Pmscmodules" },
    View: { type: Boolean, default: false, required: true },
    Edit: { type: Boolean, default: false, required: true },
    Delete: { type: Boolean, default: false, required: true },
    Add: { type: Boolean, default: false, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("menu_item_category", menu_item_categorySchema);
