const express = require("express");
const userApiController = require("../../controllers/API/userApiController");
const router = express.Router();

router.get("/users", userApiController.users)
router.get("/users/:id", userApiController.detail)



module.exports = router;