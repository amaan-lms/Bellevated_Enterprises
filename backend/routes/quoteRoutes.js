const express = require("express");
const router = express.Router();
const { createQuoteRequest } = require("../controllers/quoteController");

router.post("/", createQuoteRequest);

module.exports = router;
