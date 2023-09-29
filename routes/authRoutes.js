const express = require("express");
const router = express.Router();
const { userRegistration } = require("../controllers/authController");

router.post("/userregistration", userRegistration);

module.exports = router;
