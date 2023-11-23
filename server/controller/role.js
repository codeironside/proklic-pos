const asyncHandler = require("express-async-handler");
const ROLE = require("../model/roles/role");
// const Pmscmodules = require("../model/roles/Pmscmodule");
const eventDefinition = require("../model/roles/property_setup/eventDefinition");
const eventArea = require("../model/roles/property_setup/eventArea");
const currency = require("../model/roles/property_setup/currency");
const taxSets = require("../model/roles/property_setup/taxSets");
const taxRate = require("../model/roles/property_setup/taxRate");
const employee_roles = require("../model/roles/employee_setup/employee_roles");
const employee_sets = require("../model/roles/employee_setup/employee_set");
const employees = require("../model/roles/employee_setup/employees");
const shift = require("../model/roles/employee_setup/shift");
const discount_analyzer = require("../model/roles/general_information/discount_analyzer");
const guest_bill_footer = require("../model/roles/general_information/guest_bill_footer");
const guest_bill_header = require("../model/roles/general_information/guest_bill_header");
const guest_bill_summary_info = require("../model/roles/general_information/guest_bill_summary_info");
const guest_receipt_header = require("../model/roles/general_information/guest_receipt_header");
const payment_reasons = require("../model/roles/general_information/payment_reasons");
const prep_instructions = require("../model/roles/general_information/prep_instructions");
const return_reasons = require("../model/roles/general_information/return_reasons");
const sales_analyzer = require("../model/roles/general_information/sales_analyzer");
const service_charge_analyzer = require("../model/roles/general_information/service_charge_analyzer");
const order_devices = require("../model/roles/hardware/order_devices");
const printers = require("../model/roles/hardware/printers");
const workstation_devices = require("../model/roles/hardware/workstation_devices");
const all_properties_modules = require("../model/roles/item_masters/all_properties_modules");
const barcodes = require("../model/roles/item_masters/barcodes");
const condiments = require("../model/roles/item_masters/condiments");
const menu_item_availability = require("../model/roles/item_masters/menu_item_availability");
const menu_item_category = require("../model/roles/item_masters/menu_item_category");
const menu_item_group = require("../model/roles/item_masters/menu_item_group");
const menu_item_prices = require("../model/roles/item_masters/menu_item_prices");
const menu_item_rc_distribution = require("../model/roles/item_masters/menu_item_RC_distribution");
const menu_item_sets = require("../model/roles/item_masters/menu_item_sets");
const menu_item_supreme = require("../model/roles/item_masters/menu_item_supreme");
const menu_item = require("../model/roles/item_masters/menu_item");
const print_sets = require("../model/roles/item_masters/print_sets");
const reporting_1 = require("../model/roles/reporting/reporting_1");
const reporting_2 = require("../model/roles/reporting/reporting_2");
const reporting_3 = require("../model/roles/reporting/reporting_3");
const control_specifications = require("../model/roles/rev_center/control_specifications");
const function_screen = require("../model/roles/rev_center/function_screen");
const order_type = require("../model/roles/rev_center/order_type");
const payment_specifications = require("../model/roles/rev_center/payment_specifications");
const rev_center_config = require("../model/roles/rev_center/rev_center_config");
const rev_center_specifications = require("../model/roles/rev_center/rev_center_specifications");
const section = require("../model/roles/rev_center/section");
const serving_period = require("../model/roles/rev_center/serving_period");
const tables = require("../model/roles/rev_center/tables");
const combo_meal_group = require("../model/roles/sale_properties/combo_meal_group");
const combo_meal = require("../model/roles/sale_properties/combo_meal");
const discount_group = require("../model/roles/sale_properties/discount_group");
const discount = require("../model/roles/sale_properties/discount");
const loyalty = require("../model/roles/sale_properties/loyalty");
const payment_mode = require("../model/roles/sale_properties/payment_mode");
const service_charge_group = require("../model/roles/sale_properties/service_charge_group");
const service_charge = require("../model/roles/sale_properties/service_charge");
const stored_values = require("../model/roles/sale_properties/stored_value");
const tax_group = require("../model/roles/sale_properties/tax1");
const tax = require("../model/roles/sale_properties/tax_group1");

const EMPLOYEE = require("../model/employee");
const employeelogger = require("../utils/employeelogger");
const menulogger = require("../utils/menuloggger");
const rolelogger = require("../utils/rolelogger");
const BRANCH = require("../model/branch");

const stored_value = require("../model/roles/sale_properties/stored_value");

//@desc get  all products related to a shop
//route shops/product/getall
//access public
const getallproductoffered = asyncHandler(async (req, res) => {
  const { id } = req.auth;
  const getall = await PRODUCT.find();
  res.status(202).json({ getall });
});
const getallrolescreated = asyncHandler(async (req, res) => {
  const data = await ROLE.find().select("id role_name level");
  console.log(data);
  res.status(202).json({ data });
});


const getallrolescreate = asyncHandler(async (req, res) => {
  const data = await ROLE.find().select("");
  data.forEach((role) => {
    console.log("ID:", role.id);
    console.log("Role Name:", role.role_name);
    console.log("Level:", role.level);
    console.log("PMSC Modules:", role.pmscmodules);
    console.log("Created At:", role.createdAt);
    console.log("Updated At:", role.updatedAt);
    console.log("-------------------");
  });
  res.status(202).json({ data });
});
//@desc register product
//route products/register/
const registerROLE = asyncHandler(async (req, res) => {
  const emp = req.auth;
  console.log(emp);
  const { id, role, level } = req.body;
  // const branch = await EMPLOYEE.findById(req.body.branch_id)
  //TODO: include in production
  //emp.role === "superAdmin" ||
  //emp.role === "manger" || emp.role=="admin" || 
    if (
      process.env.role
    ) {
  const rolem = await ROLE.findOne({ id: id });

  if (rolem) {
    res.status(401);
    throw new Error("role already exist");
  }

  // Assuming you have data for the role and subdocuments

  // Create the role document
  const createROLE = await ROLE.create({
    id: id,
    role_name: role,
    level: level,
  });
  // const branch = await BRANCH.findById(req.body.branch_id);
  //data type
  if (createROLE) {
    
    res.status(202).json({
      Message: "success",
      data:createROLE

    });
    rolelogger.info(
      `roles with role_code :${id} and name ${role} was created :by 250  - ${req.Url} - ${req.method} - ${req.ip}`
    );

    // if (branch._id === createMenu.ref_branch) {

    // }
    // else {
    //     res.status(200).json({
    //       Message: `${menuName} created `,
    //       menudetails: createMenu,
    //       setup_location: branch.branch_name,
    //       data_type: "inherited",
    //     });
    //     employeelogger.info(
    //       `employee with id :${emp._id} created a product ${menuName}  :${req.session.id}:250 - ${res.statusMessage}  - ${req.originalUrl} - ${req.method} - ${req.ip}-`
    //     );
    //     menulogger.info(
    //       `menu with menu_code :${code} and name ${menuName} was created :${req.session.id}:250 - ${res.statusMessage}  - ${req.originalUrl} - ${req.method} - ${req.ip}-`
    //     );
    //     branchlogger.info(
    //       `menu with menu_code :${code} and name ${menuName} was created at branch with branch_id:${branc._id}  :${req.session.id}:250 - ${res.statusMessage}  - ${req.originalUrl} - ${req.method} - ${req.ip}-`
    //     );
    //   }
  } else {
    throw new Error("role not created");
  }
  //   }
}else{
  throw new Error('not authorized')
}});
// desc update roles
// acess provate
//routes role/update

const updateRole = asyncHandler(async (req, res) => {
  const {
    id,
    TSView,
    TSEdit,
    TSDelete,
    TSAdd,
    TRView,
    TREdit,
    TRDelete,
    TRAdd,
    EAView,
    EAEdit,
    EADelete,
    EAAdd,
    EDView,
    EDEdit,
    EDDelete,
    EDAdd,
    CView,
    CEdit,
    CDelete,
    CAdd,
    PMView,
    PMEdit,
    PMDelete,
    PMAdd,
    ERView,
    EREdit,
    ERDelete,
    ERAdd,
    ESView,
    ESEdit,
    ESDelete,
    ESAdd,
    EPView,
    EPEdit,
    EPDelete,
    EPAdd,
    SHAdd,
    SHDelete,
    SHEdit,
    SHView,
    DAView,
    DAEdit,
    DADelete,
    DAAdd,
    GBFDelete,
    GBFView,
    GBFEdit,
    GBFAdd,
    GBHAdd,
    GBHDelete,
    GBHEdit,
    GBHView,
    GBSIAdd,
    GBSIDelete,
    GBSIView,
    GBSIEdit,
    GRHView,
    GRHEdit,
    GRHDelete,
    GRHAdd,
    PRView,
    PREdit,
    PRDelete,
    PRAdd,
    PIView,
    PIEdit,
    PIDelete,
    PIAdd,
    RRView,
    RREdit,
    RRDelete,
    RRAdd,
    SAView,
    SAEdit,
    SADelete,
    SAAAdd,
    SAAdd,
    SAAEdit,
    SAAView,
    SAADelete,
    ODView,
    ODEdit,
    ODDelete,
    ODAdd,
    PView,
    PEdit,
    PDelete,
    PAdd,
    WDAdd,
    WDEdit,
    WDDelete,
    WDView,
    APMAdd,
    APMDelete,
    APMEdit,
    APMView,
    TAdd,
    TEdit,
    TDelete,
    TView,
    TGAdd,
    TGEdit,
    TGView,
    TGDelete,
    SVAdd,
    SVEdit,
    SVDelete,
    SVView,
    SCGAdd,
    SCGEdit,
    SCGDelete,
    SCGView,
    LView,
    LEdit,
    LDelete,
    LAdd,
    DView,
    DEdit,
    DDelete,
    DAdd,
    DGAdd,
    DGEdit,
    DGDelete,
    DGView,
    CMAdd,
    CMEdit,
    CMDelete,
    CMView,
    CMGAdd,
    CMGDelete,
    CMGView,
    CMGEdit,
    TBView,
    TBAdd,
    TBDelete,
    TBEdit,
    SAdd,
    SDelete,
    SPAdd,
    SPView,
    SPEdit,
    SPDelete,
    SEdit,
    SView,
    RCSAdd,
    RCSDelete,
    RCSEdit,
    RCSView,
    RCCAdd,
    RCCEdit,
    RCCDelete,
    RCCView,
    MICAdd,
    MICEdit,
    MICDelete,
    MICView,
    OTAdd,
    OTEdit,
    OTDelete,
    OTView,
    FSAdd,
    FSDelete,
    FSEdit,
    FSView,
    SCView,
    SCEdit,
    SCDelete,
    SCAdd,
    CSAdd,
    CSDelete,
    CSEdit,
    CSView,
    RTHAdd,
    RTHEdit,
    RTHDelete,
    RTHView,
    RTView,
    RTDelete,
    RTAdd,
    RTEdit,
    ROView,
    ROAdd,
    RODelete,
    ROEdit,
    PSAdd,
    PSDelete,
    PSEdit,
    PSView,
    MIView,
    MIAdd,
    MIDelete,
    MIEdit,
    MISPAdd,
    MISPDelete,
    MISPEdit,
    MISPView,
    MISView,
    MISEdit,
    MISAdd,
    MISDelete,
    MIRDAdd,
    MIRDDelete,
    MIRDView,
    MIRDEdit,
    MIGView,
    MIGAdd,
    MIGDelete,
    MIGEdit,
    PSDAdd,
    PSDDelete,
    PSDView,
    PSDEdit,
    MIAAdd,
    MIAView,
    MIAEdit,
    MIADelete,
    CDView,
    CDEdit,
    CDDelete,
    CDAdd,
    BView,
    BAdd,
    BEdit,
    BDelete,
    MIPAdd,
    MIPDelete,
    MIPEdit,
    MIPView,
  } = req.body;

  // Find the role document
  const User = await ROLE.findOne({ id: id });

  const roleId = User._id;

  // Create the pmscmodules document with the role reference
  const pmscModulesData = {
    ROlE: roleId,
    // other pmscModules data...
  };
  const createdPmscModules = await Pmscmodules.create(pmscModulesData);

  // Update the role document with the pmscmodules reference
  const rr = await ROLE.findByIdAndUpdate(roleId, {
    PmscModules: createdPmscModules._id,
  });

  // Create the subdocuments with the pmscmodules reference
  const taxSetsData = {
    pmscmodules: createdPmscModules._id,
    // other taxSets data...
    View: TSView,
    Edit: TSEdit,
    Delete: TSDelete,
    Add: TSAdd,
  };
  const currencyData = {
    pmscmodules: createdPmscModules._id,
    // other currency data...
    View: CView,
    Edit: CEdit,
    Delete: CDelete,
    Add: CAdd,
  };
  const eventAreaData = {
    pmscmodules: createdPmscModules._id,
    // other eventArea data...
    View: EAView,
    Edit: EAEdit,
    Delete: EADelete,
    Add: EAAdd,
  };
  const taxRateData = {
    pmscmodules: createdPmscModules._id,
    // other taxRate data...
    View: TRView,
    Edit: TREdit,
    Delete: TRDelete,
    Add: TRAdd,
  };
  const eventDefinitionData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    View: EDView,
    Edit: EDEdit,
    Delete: EDDelete,
    Add: EDAdd,
  };
  const employee_roleData = {
    pmscmodules: createdPmscModules._id,
    // other event role data...
    //ER=> employee role
    View: ERView,
    Edit: EREdit,
    Delete: ERDelete,
    Add: ERAdd,
  };
  const employee_setData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    View: ESView,
    Edit: ESEdit,
    Delete: ESDelete,
    Add: ESAdd,
  };
  const employeeData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //EP => employee
    View: EPView,
    Edit: EPEdit,
    Delete: EPDelete,
    Add: EPAdd,
  };
  const shiftData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //SH => SHIFT
    View: SHView,
    Edit: SHEdit,
    Delete: SHDelete,
    Add: SHAdd,
  };
  const discount_analyzerData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: DAView,
    Edit: DAEdit,
    Delete: DADelete,
    Add: DAAdd,
  };
  const guest_bill_footerData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //GBF=> discount_analyzer
    View: GBFView,
    Edit: GBFEdit,
    Delete: GBFDelete,
    Add: GBFAdd,
  };
  const guest_bill_headerData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: GBHView,
    Edit: GBHEdit,
    Delete: GBHDelete,
    Add: GBHAdd,
  };
  const guest_bill_summary_infoData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: GBSIView,
    Edit: GBSIEdit,
    Delete: GBSIDelete,
    Add: GBSIAdd,
  };
  const guest_receipt_headerData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: GRHView,
    Edit: GRHEdit,
    Delete: GRHDelete,
    Add: GRHAdd,
  };
  const payment_reasonsData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: PRView,
    Edit: PREdit,
    Delete: PRDelete,
    Add: PRAdd,
  };
  const prep_instructionsData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: PIView,
    Edit: PIEdit,
    Delete: PIDelete,
    Add: PIAdd,
  };
  const return_reasonsData = {
    pmscModules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: RRView,
    Edit: RREdit,
    Delete: RRDelete,
    Add: RRAdd,
  };
  const sales_analyzerData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: SAView,
    Edit: SAEdit,
    Delete: SADelete,
    Add: SAAdd,
  };
  const service_charge_analyzerData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: SAAView,
    Edit: SAAEdit,
    Delete: SAADelete,
    Add: SAAAdd,
  };
  const order_devicesData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: ODView,
    Edit: ODEdit,
    Delete: ODDelete,
    Add: ODAdd,
  };
  const printersData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: PView,
    Edit: PEdit,
    Delete: PDelete,
    Add: PAdd,
  };
  const workstation_devicesData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: WDView,
    Edit: WDEdit,
    Delete: WDDelete,
    Add: WDAdd,
  };
  const all_properties_modulesData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: APMView,
    Edit: APMEdit,
    Delete: APMDelete,
    Add: APMAdd,
  };
  const barcodesData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: BView,
    Edit: BEdit,
    Delete: BDelete,
    Add: BAdd,
  };
  const condimentsData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: CDView,
    Edit: CDEdit,
    Delete: CDDelete,
    Add: CDAdd,
  };
  const menu_item_availabilityData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: MIAView,
    Edit: MIAEdit,
    Delete: MIADelete,
    Add: MIAAdd,
  };
  const menu_item_categoryData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: MICView,
    Edit: MICEdit,
    Delete: MICDelete,
    Add: MICAdd,
  };
  const menu_item_groupData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: MIGView,
    Edit: MIGEdit,
    Delete: MIGDelete,
    Add: MIGAdd,
  };
  const menu_item_pricesData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: MIPView,
    Edit: MIPEdit,
    Delete: MIPDelete,
    Add: MIPAdd,
  };
  const menu_item_rc_distributionData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: MIRDView,
    Edit: MIRDEdit,
    Delete: MIRDDelete,
    Add: MIRDAdd,
  };
  const menu_item_setsData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: MISView,
    Edit: MISEdit,
    Delete: MISDelete,
    Add: MISAdd,
  };
  const menu_item_supremeData = {
    pmscModules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: MISPView,
    Edit: MISPEdit,
    Delete: MISPDelete,
    Add: MISPAdd,
  };
  const menu_itemData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: MIView,
    Edit: MIEdit,
    Delete: MIDelete,
    Add: MIAdd,
  };
  const print_setsData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: PSDView,
    Edit: PSDEdit,
    Delete: PSDDelete,
    Add: PSDAdd,
  };
  const reporting_oneData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: ROView,
    Edit: ROEdit,
    Delete: RODelete,
    Add: ROAdd,
  };
  const reporting_twoData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: RTView,
    Edit: RTEdit,
    Delete: RTDelete,
    Add: RTAdd,
  };
  const reporting_threeData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: RTHView,
    Edit: RTHEdit,
    Delete: RTHDelete,
    Add: RTHAdd,
  };
  const control_specificationsData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: CSView,
    Edit: CSEdit,
    Delete: CSDelete,
    Add: CSAdd,
  };
  const function_screenData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: FSView,
    Edit: FSEdit,
    Delete: FSDelete,
    Add: FSAdd,
  };
  const order_typeData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: OTView,
    Edit: OTEdit,
    Delete: OTDelete,
    Add: OTAdd,
  };
  const payment_specificationsData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: PSView,
    Edit: PSEdit,
    Delete: PSDelete,
    Add: PSAdd,
  };
  const rev_center_configData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: RCCView,
    Edit: RCCEdit,
    Delete: RCCDelete,
    Add: RCCAdd,
  };
  const rev_center_specificationsData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: RCSView,
    Edit: RCSEdit,
    Delete: RCSDelete,
    Add: RCSAdd,
  };
  const sectionData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: SView,
    Edit: SEdit,
    Delete: SDelete,
    Add: SAdd,
  };
  const serving_periodData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: SPView,
    Edit: SPEdit,
    Delete: SPDelete,
    Add: SPAdd,
  };
  const tablesData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: TBView,
    Edit: TBEdit,
    Delete: TBDelete,
    Add: TBAdd,
  };
  const combo_meal_groupData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: CMGView,
    Edit: CMGEdit,
    Delete: CMGDelete,
    Add: CMGAdd,
  };
  const combo_mealData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: CMView,
    Edit: CMEdit,
    Delete: CMDelete,
    Add: CMAdd,
  };
  const discount_groupData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: DGView,
    Edit: DGEdit,
    Delete: DGDelete,
    Add: DGAdd,
  };
  const discountData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: DView,
    Edit: DEdit,
    Delete: DDelete,
    Add: DAdd,
  };
  const loyaltyData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: LView,
    Edit: LEdit,
    Delete: LDelete,
    Add: LAdd,
  };
  const payment_modeData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: PMView,
    Edit: PMEdit,
    Delete: PMDelete,
    Add: PMAdd,
  };
  const service_charge_groupData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: SCGView,
    Edit: SCGEdit,
    Delete: SCGDelete,
    Add: SCGAdd,
  };
  const service_chargeData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: SCView,
    Edit: SCEdit,
    Delete: SCDelete,
    Add: SCAdd,
  };
  const stored_valueData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: SVView,
    Edit: SVEdit,
    Delete: SVDelete,
    Add: SVAdd,
  };
  const tax_groupData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: TGView,
    Edit: TGEdit,
    Delete: TGDelete,
    Add: TGAdd,
  };
  const taxData = {
    pmscmodules: createdPmscModules._id,
    // other eventDefinition data...
    //DA=> discount_analyzer
    View: TView,
    Edit: TEdit,
    Delete: TDelete,
    Add: TAdd,
  };
  const TS = await taxSets.create(taxSetsData);
  const CUR = await currency.create(currencyData);
  const EA = await eventArea.create(eventAreaData);
  const TR = await taxRate.create(taxRateData);
  const ED = await eventDefinition.create(eventDefinitionData);
  //start here
  const ER = await employee_roles.create(employee_roleData);
  const EP = await employees.create(employeeData);
  const EPS = await employee_sets.create(employee_setData);
  const SH = await shift.create(shiftData);
  const DA = await discount_analyzer.create(discount_analyzerData);
  const GBF = await guest_bill_footer.create(guest_bill_footerData);
  const GBH = await guest_bill_header.create(guest_bill_headerData);
  const GBSI = await guest_bill_summary_info.create(
    guest_bill_summary_infoData
  );
  const GRH = await guest_receipt_header.create(guest_receipt_headerData);
  const PR = await payment_reasons.create(payment_reasonsData);
  const PI = await prep_instructions.create(prep_instructionsData);
  const RR = await return_reasons.create(return_reasonsData);
  const SA = await sales_analyzer.create(sales_analyzerData);
  const SCA = await service_charge_analyzer.create(service_charge_analyzerData);
  const P = await printers.create(printersData);
  const OD = await order_devices.create(order_devicesData);
  const WSD = await workstation_devices.create(workstation_devicesData);
  const APM = await all_properties_modules.create(all_properties_modulesData);
  const B = await barcodes.create(barcodesData);
  const C = await condiments.create(condimentsData);
  const MIA = await menu_item_availability.create(menu_item_availabilityData);
  const MIC = await menu_item_category.create(menu_item_categoryData);
  const MI = await menu_item.create(menu_itemData);
  const MIP = await menu_item_prices.create(menu_item_pricesData);
  const MIG = await menu_item_group.create(menu_item_groupData);
  const MIRD = await menu_item_rc_distribution.create(
    menu_item_rc_distributionData
  );
  const MIS = await menu_item_sets.create(menu_item_setsData);
  const MISP = await menu_item_supreme.create(menu_item_supremeData);
  const PS = await print_sets.create(print_setsData);
  const R1 = await reporting_1.create(reporting_oneData);
  const R2 = await reporting_2.create(reporting_twoData);
  const R3 = await reporting_3.create(reporting_threeData);

  const CS = await control_specifications.create(control_specificationsData);
  const FS = await function_screen.create(function_screenData);
  const OT = await order_type.create(order_typeData);
  const PSP = await payment_specifications.create(payment_specificationsData);
  const RCC = await rev_center_config.create(rev_center_configData);
  const S = await section.create(sectionData);
  const RCS = await rev_center_specifications.create(
    rev_center_specificationsData
  );
  const SP = await serving_period.create(serving_periodData);
  const T = await tables.create(tablesData);
  const CMG = await combo_meal_group.create(combo_meal_groupData);
  const CM = await combo_meal.create(combo_mealData);
  const DG = await discount_group.create(discount_groupData);
  const DN = await discount.create(discountData);
  const L = await loyalty.create(loyaltyData);
  const PM = await payment_mode.create(payment_modeData);
  const SCG = await service_charge_group.create(service_charge_groupData);
  const SC = await service_charge.create(service_chargeData);
  const SV = await stored_values.create(stored_valueData);
  const TG = await tax_group.create(tax_groupData);
  const TX = await tax.create(taxData);

  // console.log(TX._id);
  // Update the pmscmodules document with the subdocument ids
  await Pmscmodules.findByIdAndUpdate(createdPmscModules._id, {
    Tax1: TX._id,
    Tax_group1: TG._id,
    taxSet: TS._id,
    Currency: CUR._id,
    taxRates: TR._id,
    EventArea: EA._id,
    EventDefinition: ED._id,
    Menu_items: MI._id,
    All_properties_modules: APM._id,
    Barcodes: B._id,
    Condiments: C._id,
    Menu_items_availability: MIA._id,
    Menu_items_category: MIC._id,
    Menu_items_group: MIG._id,
    Menu_items_prices: MIP._id,
    Menu_items_rc_distribution: MIRD._id,
    Menu_items_sets_supreme: MISP._id,
    Menu_item_sets: MIS._id,
    Print_sets: PS._id,
    Employee_set: EPS._id,
    Employee_roles: ER._id,
    Employees1: EP._id,
    Shift: SH._id,
    Discount_analyzer: DA._id,
    Guest_bill_footer: GBF._id,
    Guest_bill_header: GBH._id,
    Guest_bill_summary_info: GBSI._id,
    Guest_receipt_header: GRH._id,
    Payment_specifications: PSP._id,
    Payment_reasons: PR._id,
    Prep_instructions: PI._id,
    Return_reasons: RR._id,
    Sales_analyzer: SA._id,
    Sales_charge_analyzer: SCA._id,
    Order_devices: OD._id,
    Printers: P._id,
    Combo_meals: CM._id,
    Reporting_one: R1._id,
    Reporting_two: R2._id,
    Reporting_three: R3._id,
    Workstation_devices: WSD._id,
    Control_specifications: CS._id,
    Function_screens: FS._id,
    Order_type: OT._id,
    Payment_specifications: PSP._id,
    Rev_center_config: RCC._id,
    Rev_center_specifications: RCS._id,
    Section: S._id,
    Serving_period: SP._id,
    Tables1: T._id,
    Combo_meal_group: CMG._id,
    Discount: DN._id,
    Discount_group: DG._id,
    Loyalty: L._id,
    Payment_mode: PM._id,
    Service_charge: SC._id,
    Service_charge_group: SCG._id,
    Stored_value: SV._id,
   
    Discount: DN._id,
  });
  const tax2 = await tax.findById(TX._id)
  
  const tax_group2 = await tax_group.findById(TG._id)

  // Find the role document again, this time with populated pmscmodules and its subdocuments
  const role = await ROLE.findById(roleId).populate({
    path: "PmscModules",
    populate: [
      { path: "taxSet" },
      { path: "Currency" },
      { path: "taxRates" },
      { path: "EventArea" },
      { path: "EventDefinition" },
      { path: "Menu_items" },
      { path: "All_properties_modules" },
      { path: "Barcodes" },
      { path: "Condiments" },
      { path: "Menu_items_availability" },
      { path: "Menu_items_category" },
      { path: "Menu_items_group" },

      { path: "Menu_items_prices" },
      { path: "Menu_items_rc_distribution" },
      { path: "Menu_items_sets_supreme" },
      { path: "Menu_item_sets" },
      { path: "Print_sets" },
      { path: "Employee_roles" },
      { path: "Employee_set" },
      { path: "Employees1" },
      { path: "Shift" },
      { path: "Discount_analyzer" },
      { path: "Guest_bill_footer" },
      { path: "Guest_bill_header" },
      { path: "Guest_bill_summary_info" },
      { path: "Guest_receipt_header" },
      { path: "Payment_reasons" },
      { path: "Prep_instructions" },
      { path: "Return_reasons" },
      { path: "Sales_analyzer" },
      { path: "Sales_charge_analyzer" },
      { path: "Order_devices" },
      { path: "Printers" },
      { path: "Workstation_devices" },
      { path: "Combo_meals" },
      { path: "Reporting_one" },
      { path: "Reporting_two" },
      { path: "Reporting_three" },
      { path: "Control_specifications" },
      { path: "Section" },
      { path: "Serving_period" },
      { path: "Tables1" },

      { path: "Payment_mode" },

      { path: "Service_charge" },
      { path: "Service_charge_group" },
      { path: "Stored_value" },
      { path: "Discount" },
      { path: "Discount_group" },

      { path: "Payment_specifications" },
      { path: "Rev_center_config" },
      { path: "Rev_center_specifications" },
      { path: "Order_type" },
      { path: "Loyalty" },
      { path: "Function_screens" },
      { path: "Tax_group1" },
      { path: "Tax1" },
      { path: "Combo_meal_group" },
    ],
  });

  // If the "pmscmodules" is empty or null, you can throw an error or handle it as needed
  if (!role.PmscModules) {
    throw new Error("pmscmodules not found or empty");
  }
  //07085462527
  //thefeyisayo
  // Construct the response object
  const response = {
    success: true,
    message: "Documents retrieved successfully",
    data: {
      role, tax2,tax_group2
    },
  };

  res.status(200).json(response);
});
//desc pay for product
//@access private
//routes product/pay
const payForproduct = asyncHandler(async (req, res) => {});
module.exports = {
  registerROLE,
  getallrolescreated,
  getallrolescreate,
  updateRole,
};
