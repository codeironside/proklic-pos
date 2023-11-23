const express = require("express")


const { protect } = require("../middleware/authmiddleware")
const { registerROLE, getallrolescreated, getallrolescreate, updateRole } = require("../controller/role")
const Router = express.Router()




Router.route("/register").post(registerROLE)//include protect in production
// get all roles created
Router.route("/getallroles").get(getallrolescreated)// include protect in production

Router.route("/update").post(protect, updateRole)

//demo
Router.route("/getallrole").get(protect, getallrolescreate)
module.exports=Router