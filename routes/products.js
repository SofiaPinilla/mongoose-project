const express = require("express")
const ProductController = require("../controllers/ProductController")
const { authentication, isAdmin } = require("../middlewares/authentication")
const router = express.Router()

router.post("/create",authentication,isAdmin, ProductController.create)
router.get("/getAll",ProductController.getAll)
router.get("/getById/:_id",ProductController.getById)
router.get("/getByName/:name", ProductController.getProductsByName)
router.delete("/deleteById/:_id",authentication,isAdmin,ProductController.delete)
router.put("/updateById/:_id",authentication,isAdmin,ProductController.update)
router.put("/createReview/:_id",authentication, ProductController.insertComment)
module.exports = router