const express = require("express");
const router = express.Router();
const { submitProposal } = require("../controllers/projectController");

router.post("/", submitProposal); // POST /api/project

module.exports = router;
