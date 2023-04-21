const express = require("express")
const ProductController = require("../controllers/ProductController")
const router = express.Router()

router.post("/create",ProductController.create)
router.get("/getAll",ProductController.getAll)
router.get("/getById/:_id",ProductController.getById)
router.get("/getByName/:name", ProductController.getProductsByName)
router.delete("/deleteById/:_id",ProductController.delete)
router.put("/updateById/:_id",ProductController.update)
module.exports = router