const mongoose = require("mongoose");
const BRANCH = mongoose.Schema(
  {
    branch_name: {
      type: String,
      required: [true, "please add a name "],
      unique: true,
    },
    employeeid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EMPLOYEE",
      default: null,
    },
    branch_id: {
      type: String,
      required: [true, "please add a branch id"],
    },
    type_of_branch: {
      type: String,
      default: "property",
      required: [true, "please add a branch type"],
    },
    address: {
      type: String,
      required: [true, "please add a quantity"],
    },
    description: {
      type: String,
      required: [true, "please add a description"],
    },
    // ref_branch: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: [true, "please add a branch id"],
    //   default: null,
    //   ref: "BRANCH", //TODO:change when making production
    // },
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("BRANCH", BRANCH);
