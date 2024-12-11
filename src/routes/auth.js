const express = require("express");
const { signup, login } = require("../controllers/auth");

const router = express.Router();

// Signup Route
router.post("/signup", signup);

// Login Route
router.post("/login", login);

module.exports = router;