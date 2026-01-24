const express = require("express");
const router = express.Router();
const { createDriverApplication } = require("../controllers/driverController");

router.post("/", createDriverApplication);

module.exports = router;
