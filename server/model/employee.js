const mongoose = require("mongoose");
const EMPLOYEE = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "please add a first name "],
    },
    lastName: {
      type: String,
      required: [true, "please add a last name "],
    },
    property_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BRANCH",
      
    },
    userName: {
      unique: true,
      type: String,
      required: [true, "please add a user name "],
    },
    group: {
      type: String,
      required: [true, "please add a group "],
    },
    checkName: {
      unique: true,
      type: String,
      required: [true, "please add a check name "],
    },
    role_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"ROlE"
    },
    id: {
      type: String,
      required: [true, "please add an Id "],
      unique: true,
    },
    isDeleted: {
      type: Boolean,
      required: [true, "please specify if employee is deleted"],
     default:false
    },

    posLogging: {
      type: Boolean,
      required: [true, "please specify if pos is logged "],
    default: false,
    },
    pmscLogging: {
      type: Boolean,
      required: [true, "please specify if pmsc is logged "],
      default:false
    },
    alternate_id: {
      type: String,
      required: [true, "please add an alternate_Id "],
      unique: true,
    },
    payroll_id: {
      type: String,
      required: [true, "please add a payroll_id "],
      unique: true,
    },
    email: {
      type: String,
      required :[true, 'please add an email']
    },

    password: {
      type: String,
    },
    phoneNumber: {
      type: String,
      required: [true, "please include phone number"],
    },

    sessionStorage: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("EMPLOYEE", EMPLOYEE);
