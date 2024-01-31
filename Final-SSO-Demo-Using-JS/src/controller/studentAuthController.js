const studentAuthService = require('../services/studentAuthService')
const { studentResponse } = require('../utils/studentResponseUtil')
const session = require('express-session');
const passport = require('passport');
require('../utils/auth');



function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
  }

//------------------- Auth Homepage -------------------//

const homePage =async (req, res)=>{
    res.send('<a href="/Student/Auth/Login">Authenticate with Google</a>');
}

//------------------- login -------------------//

const login =async (req, res)=>{
    passport.authenticate('google', { scope: ['email', 'profile'] })(req, res);
}

//------------------- login callback -------------------//
const callback =async (req, res)=>{
    
    passport.authenticate( 'google', {
        successRedirect: '/Student/Auth/list',
        failureRedirect: '/Student/Auth'
      })(req, res);
}

//------------------- Get all students with Auth-------------------//

const getAllStudents =async (req, res) => {
    try {
        studentResponse.sendAllStudents(res,await studentAuthService.getAllStudents())
    } catch (error) {
        studentResponse.sendServerError(res);
    }
}



module.exports = {getAllStudents,login,homePage,callback,isLoggedIn}