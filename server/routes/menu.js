const express = require("express")

const {registermenu } = require("../controller/menu")
const { protect } = require("../middleware/authmiddleware")
const Router = express.Router()




Router.route("/register").post(protect,registermenu)


,module.exports=Router