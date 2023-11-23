const asyncHandler = require("express-async-handler");
const MENU = require("../model/menu");
const EMPLOYEE = require("../model/employee");
const employeelogger = require("../utils/employeelogger");
const menulogger = require("../utils/menuloggger");
const branchlogger = require("../utils/branchlogger");
const BRANCH = require("../model/branch");

//@desc get  all products related to a shop
//route shops/product/getall
//access public
const getallproductoffered = asyncHandler(async (req, res) => {
  const { id } = req.auth;
  const getall = await PRODUCT.find();
  res.status(202).json({ getall });
});

//@desc register product
//route products/register/
const registermenu = asyncHandler(async (req, res) => {
  const emp = req.auth;
  // console.log(emp)
  const {
    menuName,
    price,
    QuantityAvailable,
    description,
    MI_group,
    MI_category,
    happy_hour_price,
    prep_cost,
    menu_code,
    branch_id,
  } = req.body;
  // const branch = await EMPLOYEE.findById(req.body.branch_id)
  if (
    emp.role === "superAdmin" ||
    (emp.role === "manger" && emp.property_id === req.body.branch_id)
  ) {
    const product = await MENU.findOne({ menuName: menuName });

    if (product) {
      res.status(401);
      throw new Error("product already in stock");
    }

    const createMenu = await MENU.create({
      employeeid: emp._id,
      menuName,
      price,
      ref_branch: req.body.branch_id,
      description,
      QuantityAvailable: parseInt(QuantityAvailable),
      total: parseInt(QuantityAvailable),
      MI_group,
      MI_category,
      happy_hour_price,
      prep_cost,
      menu_code,
      branch_id,
    });
    const branch = await BRANCH.findById(req.body.branch_id);
    //data type
    if (createMenu) {
      if (branch._id === createMenu.ref_branch) {
        res.status(202).json({
          Message: `${menuName} created `,
          menudetails: createMenu,
          setup_location: branch.branch_name,
          data_type: "property",
        });
        employeelogger.info(
          `employee with id :${emp._id} created a product ${menuName} with menu_code:${menu_code}  :${req.session.id}:250 - ${res.statusMessage}  - ${req.originalUrl} - ${req.method} - ${req.ip}-`
        );
        menulogger.info(
          `menu with menu_code :${menu_code} and name ${menuName} was created :${req.session.id}:250 - ${res.statusMessage}  - ${req.originalUrl} - ${req.method} - ${req.ip}-`
        );
        branchlogger.info(
          `menu with menu_code :${menu_code} and name ${menuName} was created at branch with branch_id:${branch._id}  :${req.session.id}:250 - ${res.statusMessage}  - ${req.originalUrl} - ${req.method} - ${req.ip}-`
        );
      } else {
        res.status(200).json({
          Message: `${menuName} created `,
          menudetails: createMenu,
          setup_location: branch.branch_name,
          data_type: "inherited",
        });
        employeelogger.info(
          `employee with id :${emp._id} created a product ${menuName}  :${req.session.id}:250 - ${res.statusMessage}  - ${req.originalUrl} - ${req.method} - ${req.ip}-`
        );
        menulogger.info(
          `menu with menu_code :${code} and name ${menuName} was created :${req.session.id}:250 - ${res.statusMessage}  - ${req.originalUrl} - ${req.method} - ${req.ip}-`
        );
        branchlogger.info(
          `menu with menu_code :${code} and name ${menuName} was created at branch with branch_id:${branc._id}  :${req.session.id}:250 - ${res.statusMessage}  - ${req.originalUrl} - ${req.method} - ${req.ip}-`
        );
      }
    } else {
      throw new Error("user not authorized");
    }
  }
});


//@desc register product
//route products/register/
const menu_item_class = asyncHandler(async (req, res) => {
  const emp = req.auth;
  // console.log(emp)
  const {
    menuName,
    menu_code,
    Tax_class,
    Major_level,
    Sub_level,
    Priviledge_Group,
    Sales_Analyzer,
    Discount_Analyzer,
    Service_Charge_Analyzer,
    Pricing_Calculation,
    Print_Class,
    Mandatory_Condiments,
    Component_of_Condiment,
    Open_Priced_Menu_Items,
    Priced_Menu_Items,
    Increment_Seat,
    Reference_Entry_Required,
    Validation_Required,
  } = req.body;
  // const branch = await EMPLOYEE.findById(req.body.branch_id)
  if (
    emp.role === "superAdmin" ||
    (emp.role === "manger" && emp.property_id === req.body.branch_id)
  ) {
    const product = await MENU.findOne({ menuName: menuName });

    if (product) {
      res.status(401);
      throw new Error("product already in stock");
    }

    const createMenu = await MENU.create({
      menu_code,
      Tax_class,
      Major_level,
      Sub_level,
      Priviledge_Group,
      Sales_Analyzer,
      Discount_Analyzer,
      Service_Charge_Analyzer,
      Pricing_Calculation,
      Print_Class,
      Mandatory_Condiments,
      Component_of_Condiment,
      Open_Priced_Menu_Items,
      Priced_Menu_Items,
      Increment_Seat,
      Reference_Entry_Required,
      Validation_Required,
    });
    const branch = await BRANCH.findById(req.body.branch_id);
    //data type
    if (createMenu) {
      if (branch._id === createMenu.ref_branch) {
        res.status(202).json({
          Message: `${menuName} created `,
          menudetails: createMenu,
          setup_location: branch.branch_name,
          data_type: "property",
        });
        employeelogger.info(
          `employee with id :${emp._id} created a menu item class\ ${menuName} with menu_code:${menu_code}  :${req.session.id}:250 - ${res.statusMessage}  - ${req.originalUrl} - ${req.method} - ${req.ip}-`
        );
        menulogger.info(
          `menu with menu_code :${menu_code} and name ${menuName} was created :${req.session.id}:250 - ${res.statusMessage}  - ${req.originalUrl} - ${req.method} - ${req.ip}-`
        );
        branchlogger.info(
          `menu with menu_code :${menu_code} and name ${menuName} was created at branch with branch_id:${branch._id}  :${req.session.id}:250 - ${res.statusMessage}  - ${req.originalUrl} - ${req.method} - ${req.ip}-`
        );
      } else {
        res.status(200).json({
          Message: `${menuName} created `,
          menudetails: createMenu,
          setup_location: branch.branch_name,
          data_type: "inherited",
        });
        employeelogger.info(
          `employee with id :${emp._id} created a product ${menuName}  :${req.session.id}:250 - ${res.statusMessage}  - ${req.originalUrl} - ${req.method} - ${req.ip}-`
        );
        menulogger.info(
          `menu with menu_code :${code} and name ${menuName} was created :${req.session.id}:250 - ${res.statusMessage}  - ${req.originalUrl} - ${req.method} - ${req.ip}-`
        );
        branchlogger.info(
          `menu with menu_code :${code} and name ${menuName} was created at branch with branch_id:${branc._id}  :${req.session.id}:250 - ${res.statusMessage}  - ${req.originalUrl} - ${req.method} - ${req.ip}-`
        );
      }
    } else {
      throw new Error("user not authorized");
    }
  }
});
//desc pay for product
//@access private
//routes product/pay
const payForproduct = asyncHandler(async (req, res) => {});
module.exports = { registermenu, menu_item_class };
