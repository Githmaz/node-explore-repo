const express = require("express");
const studentAuthController = require('../../controller/studentAuthController');
const router = express.Router();


router.get('/list',studentAuthController.getAllStudents); // Get All Students


module.exports = router;
