const mongoose = require("mongoose");
const MENU_ITEM_CLASS = mongoose.Schema(
  {
    
    menu_code: {
      type: String,
      red:"MENU",
      required: [true, "please add a menu code "],
      unique: true,
    },
    Tax_Class_code: { type: String },

    Major_Level: { type: String },

    Sub_Level: { type: String },
    Privilege_Group: { type: String },

    Sales_Analyzer: { type: String },

    Discount_Analyzer: { type: String },

    Service_Charge_Analyzer: { type: String },

    Pricing_Calculation: { type: String },

    Print_Class: { type: String },

    Mandatory_Condiments: { type: String },
    Component_of_Condiment: { type: String },

    Open_Priced_Menu_Items: { type: Boolean },
    // ; OFF = Preset Menu Items

    Priced_Menu_Items: { type: Boolean },

    Increment_Seat: { type: Boolean },

    Reference_Entry_Required: { type: Boolean },
    Validation_Required: { type: Boolean },
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("MENU_ITEM_CLASS", MENU_ITEM_CLASS);
