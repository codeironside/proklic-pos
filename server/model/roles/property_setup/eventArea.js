const mongoose = require("mongoose");

const eventAreaSchema = mongoose.Schema(
  {
    pmscmodules: { type: mongoose.Schema.Types.ObjectId, ref: "Pmscmodules" },
    View: { type: Boolean, default: false },
    Edit: { type: Boolean, default: false },
    Delete: { type: Boolean, default: false },
    Add: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("eventArea", eventAreaSchema);
