const express = require("express");
const studentAuthController = require('../../controller/studentAuthController');
const router = express.Router();

router.get('/', studentAuthController.homePage);
router.get('/login', studentAuthController.login);
router.get('/login/callback', studentAuthController.callback);
router.get('/list', studentAuthController.isLoggedIn, studentAuthController.getUserData);
router.get('/logout', studentAuthController.logout);

router.get('/repoTest',studentAuthController.testRepo)
module.exports = router;
