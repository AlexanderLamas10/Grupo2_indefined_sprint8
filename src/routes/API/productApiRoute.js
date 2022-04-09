const express = require("express");
const userApiController = require("../../controllers/API/productApiController");
const router = express.Router();

router.get("/products", userApiController.products)
router.get("/products/:id", userApiController.detail)



module.exports = router;