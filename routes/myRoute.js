// routes/myRoutes.js
const express = require("express");
const router = express.Router();

// Import controller functions
const myController = require("../controllers/myController");

// Define routes and map them to controller functions
router.get("/", myController.getHome);
router.get("/about", myController.getAbout);

module.exports = router;
