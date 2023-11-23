const asyncHandler = require("express-async-handler");
const BRANCH = require("../model/branch");
const EMPLOYEE = require("../model/employee");
const employeelogger = require("../utils/employeelogger");
const branchlogger= require("../utils/branchlogger")

//@desc get  all products related to a shop
//route shops/product/getall
//access public
const getallBRACH = asyncHandler(async (req, res) => {
  // const { id } = req.auth; //TODO:change in production
  const getall = await BRANCH.find();
  res.status(202).json({ getall });
});


//@route GET/usersllogin
//desc login users
//access public
const loginBranch = asyncHandler(async (req, res) => {
  
  const { userName, password } = req.body;

  const id = await EMPLOYEE.findOne({ userName: userName });
  if(id.role === "admin"|| id.role==="branchManager"){
  if (id) {
    if (id && bcrypt.compare(password, id.password)) {
      req.session.userid = req.session.id;
      req.session.role = id.role;
      const change = await EMPLOYEE.findByIdAndUpdate(
        id._id,
        { sessionStorage: req.session.id },
        { new: true }
      );
      if (change) {
        res.status(202).json({
          userid: req.session.userid,
          role: req.session.role,
          token: generateToken(id._id),
        });
        employeelogger.info(
          ` employee with employeeid: ${id.email} logged in coode:200 - ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip} `
        );
      }
    }

    
  }else{
    throw new Error("user not found");
  }}else{
    throw new Error("unauthorized employee")
  }
});


//@desc register product
//route products/register/
const registerBranch = asyncHandler(async (req, res) => {
  const emp = req.auth;
  const { branch_name,type_of_branch,address,branch_id,description} = req.body;
  const roled = "admin"

  //for production
  // if (emp.role === "superAdmin" || emp.role === "manger" )
  if (roled === "admin") {
    const branch = await BRANCH.findOne({ branch_name});

    if (branch) {
      res.status(401);
      throw new Error("branch already exist");
    }
if(type_of_branch==="chain"){
   // ref_branch:req.body.chain_id, employeeid: emp._id, //TODO: change when making production
    const createbranch = await BRANCH.create({
      branch_id,
        
        branch_name,
        type_of_branch,
        description,
       address
      });
      if (createbranch) {
        res.status(200).json({
          Message: `successful `,
          banchdetails: createbranch,
        });
        employeelogger.info(
          `employee with id ${
           emp._id
          } logged in at ${currentDateTimeWAT.toString()} - ${res.statusCode} - ${
            res.statusMessage
          } - ${req.originalUrl} - ${req.method} - ${req.ip} `
        )
      } 
}else{
 
  const type_of_branch ="property"
    const createbranch = await BRANCH.create({
      
       branch_id,
        branch_name,
        type_of_branch,
        description,
       address
      });
      if (createbranch) {
        res.status(200).json({
          Message: `success`,
          branchdetails: createbranch,
        });
        const emp = "64845148648454"
        employeelogger.info(
          `employee with id ${
           emp
          } logged in at ${currentDateTimeWAT.toString()} - ${res.statusCode} - ${
            res.statusMessage}`
        )
      } 
}}else{
      throw new Error("user not authorized");
    }

});

//desc pay for product
//@access private
//routes product/pay
const payForproduct = asyncHandler(async (req, res) => {});
module.exports = { registerBranch,loginBranch, getallBRACH };
