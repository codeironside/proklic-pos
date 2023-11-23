const mongoose = require("mongoose");

const roleSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, "Please add an id"],
      unique: true,
    },
    assignedTo: {
      type: String, //convert to object id later mongoose.Schema.Types.ObjectId,
      required: [true, "please add a employee id"],
      default: "employee_id",
    },
    role_name: {
      type: String,
      required: [true, "Please add a role name"],
    },
    level: {
      type: String,
      required: [true, "Please add a level"],
    },
    PmscModules: [{ type: mongoose.Schema.ObjectId, ref: "Pmscmodules" }],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("ROLE", roleSchema);
