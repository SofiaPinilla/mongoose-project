const express = require("express")
const OrderController = require("../controllers/OrderController")
const { authentication, isAuthor } = require("../middlewares/authentication")
const router = express.Router()

router.post("/create",authentication, OrderController.create)
router.put("/update/:_id",authentication,isAuthor, OrderController.update)

module.exports = router