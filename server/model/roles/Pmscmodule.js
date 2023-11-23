const mongoose = require("mongoose");

const pmscModulesSchema = mongoose.Schema(
  {
    ROlE: { type: mongoose.Schema.Types.ObjectId, ref: "ROLE" },
    taxSet: [{ type: mongoose.Schema.Types.ObjectId, ref: "taxSets" }],
    Currency: [{ type: mongoose.Schema.Types.ObjectId, ref: "currency" }],
    taxRates: [{ type: mongoose.Schema.Types.ObjectId, ref: "taxRate" }],
    EventArea: [{ type: mongoose.Schema.Types.ObjectId, ref: "eventArea" }],
    EventDefinition: [
      { type: mongoose.Schema.Types.ObjectId, ref: "eventDefinition" },
    ],
    Menu_items: [{ type: mongoose.Schema.Types.ObjectId, ref: "menu_item" }],
    All_properties_modules: [
      { type: mongoose.Schema.Types.ObjectId, ref: "all_properties_modules" },
    ],
    Barcodes: [{ type: mongoose.Schema.Types.ObjectId, ref: "barcodes" }],
    Condiments: [{ type: mongoose.Schema.Types.ObjectId, ref: "condiment" }],
    Menu_items_availability: [
      { type: mongoose.Schema.Types.ObjectId, ref: "menu_item_availability" },
    ],
    Menu_items_category: [
      { type: mongoose.Schema.Types.ObjectId, ref: "menu_item_category" },
    ],
    Menu_items_group: [
      { type: mongoose.Schema.Types.ObjectId, ref: "menu_item_group" },
    ],
    Menu_items_prices: [
      { type: mongoose.Schema.Types.ObjectId, ref: "menu_items_prices" },
    ],
    Menu_items_rc_distribution: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "menu_item_rc_distribution",
      },
    ],
    Menu_items_sets_supreme: [
      { type: mongoose.Schema.Types.ObjectId, ref: "menu_item_sets_supreme" },
    ],
    Menu_item_sets: [
      { type: mongoose.Schema.Types.ObjectId, ref: "menu_item_sets" },
    ],
    Print_sets: [{ type: mongoose.Schema.Types.ObjectId, ref: "print_sets" }],
    Employee_roles: [
      { type: mongoose.Schema.Types.ObjectId, ref: "employee_roles" },
    ],
    Employee_set: [
      { type: mongoose.Schema.Types.ObjectId, ref: "employee_set" },
    ],
    Employees1: [{ type: mongoose.Schema.Types.ObjectId, ref: "employees1" }],
    Shift: [{ type: mongoose.Schema.Types.ObjectId, ref: "shift" }],

    Discount_analyzer: [
      { type: mongoose.Schema.Types.ObjectId, ref: "discount_analyzer" },
    ],
    Guest_bill_footer: [
      { type: mongoose.Schema.Types.ObjectId, ref: "guest_bill_footer" },
    ],
    Guest_bill_header: [
      { type: mongoose.Schema.Types.ObjectId, ref: "guest_bill_header" },
    ],

    Guest_bill_summary_info: [
      { type: mongoose.Schema.Types.ObjectId, ref: "guest_bill_summary_info" },
    ],
    Guest_receipt_header: [
      { type: mongoose.Schema.Types.ObjectId, ref: "guest_receipt_header" },
    ],

    Payment_reasons: [
      { type: mongoose.Schema.Types.ObjectId, ref: "payment_reasons" },
    ],
    Prep_instructions: [
      { type: mongoose.Schema.Types.ObjectId, ref: "prep_instructions" },
    ],
    Return_reasons: [
      { type: mongoose.Schema.Types.ObjectId, ref: "return_reasons" },
    ],
    Sales_analyzer: [
      { type: mongoose.Schema.Types.ObjectId, ref: "sales_analyzer" },
    ],
    Sales_charge_analyzer: [
      { type: mongoose.Schema.Types.ObjectId, ref: "service_charge_analyzer" },
    ],
    Order_devices: [
      { type: mongoose.Schema.Types.ObjectId, ref: "order_devices" },
    ],
    Printers: [{ type: mongoose.Schema.Types.ObjectId, ref: "printers" }],
    Workstation_devices: [
      { type: mongoose.Schema.Types.ObjectId, ref: "workstation_devices" },
    ],
    Combo_meals: [{ type: mongoose.Schema.Types.ObjectId, ref: "combo_meal" }],
    Reporting_one: [
      { type: mongoose.Schema.Types.ObjectId, ref: "reporting_one" },
    ],
    Reporting_two: [
      { type: mongoose.Schema.Types.ObjectId, ref: "reporting_two" },
    ],
    Reporting_three: [
      { type: mongoose.Schema.Types.ObjectId, ref: "reporting_three" },
    ],
    Control_specifications: [
      { type: mongoose.Schema.Types.ObjectId, ref: "control_specifications" },
    ],
    Function_screens: [
      { type: mongoose.Schema.Types.ObjectId, ref: "function_screen" },
    ],
    Order_type: [{ type: mongoose.Schema.Types.ObjectId, ref: "order_type" }],
    Payment_specifications: [
      { type: mongoose.Schema.Types.ObjectId, ref: "payment_specifications" },
    ],
    Rev_center_config: [
      { type: mongoose.Schema.Types.ObjectId, ref: "rev_center_config" },
    ],

    Rev_center_specifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "rev_center_specifications",
      },
    ],
    Section: [{ type: mongoose.Schema.Types.ObjectId, ref: "section" }],
    Serving_period: [
      { type: mongoose.Schema.Types.ObjectId, ref: "serving_period" },
    ],

    Tables1: [{ type: mongoose.Schema.Types.ObjectId, ref: "tables1" }],
    Combo_meal_group: [
      { type: mongoose.Schema.Types.ObjectId, ref: "combo_meal_group" },
    ],

    Discount: [{ type: mongoose.Schema.Types.ObjectId, ref: "discount" }],
    Discount_group: [
      { type: mongoose.Schema.Types.ObjectId, ref: "discount_group" },
    ],
    Loyalty: [{ type: mongoose.Schema.Types.ObjectId, ref: "loyalty" }],
    Payment_mode: [
      { type: mongoose.Schema.Types.ObjectId, ref: "payment_mode" },
    ],

    Service_charge: [
      { type: mongoose.Schema.Types.ObjectId, ref: "service_charge" },
    ],
    Service_charge_group: [
      { type: mongoose.Schema.Types.ObjectId, ref: "service_charge_group" },
    ],
    Stored_value: [
      { type: mongoose.Schema.Types.ObjectId, ref: "stored_value" },
    ],
    Tax1: [
      { type: mongoose.Schema.Types.ObjectId, ref: "stored_value" },
    ],
    Tax_group1: [
      { type: mongoose.Schema.Types.ObjectId, ref: "stored_value" },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pmscmodules", pmscModulesSchema);
