const express = require("express")
const { protect } = require("../middleware/authmiddleware")
const { registerBranch, getallBRACH, loginBranch } = require("../controller/branch")
const Router = express.Router()




Router.route("/register").post(registerBranch)

Router.route("/login").post(protect,loginBranch)

Router.route('/getall').get(getallBRACH)
,module.exports=Router