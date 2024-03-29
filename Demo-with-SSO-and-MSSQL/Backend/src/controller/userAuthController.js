// const studentAuthService = require('../services/studentAuthService');
const { studentResponse: Response } = require('../utils/ResponseUtil');
const passport = require('passport');
const userRepo = require('../repository/userAuthRepository'); // Import your repository file
require('../utils/auth');

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

//------------------- RepoTesting -------------------//
const testRepo = async (req, res) => {
    return res.send(await userRepo.getTableNames());
}

//------------------- Auth Homepage -------------------//

const homePage = async (req, res) => {
    res.send('<a href="/Student/Auth/Login">Authenticate with Google</a>');
}

//------------------- login -------------------//

const login = async (req, res) => {
    passport.authenticate('google', { scope: ['email', 'profile'] })(req, res);
}

//------------------- login callback -------------------//
const callback = async (req, res, next) => {
    passport.authenticate('google', {
        successRedirect: '/Student/Auth/list',
        failureRedirect: '/Student/Auth'
    })(req, res, next);
}

//------------------- log out  -------------------//
const logout = async (req, res) => {
    let user = req.user;

    if (!user) {
        return res.status(401).json({
            success: false,
            message: "You are already logged out",
            error: "Unauthorized"
        });
    }

    console.log(JSON.stringify({
        displayName: user.displayName,
        email: user.emails[0].value
    }));

    req.logout((err) => {
        if (err) {
            console.error('Error logging out:', err);
            return res.status(500).send('Internal Server Error');
        }
        req.session.destroy((err) => {
            if (err) {
                console.error('Error destroying session:', err);
                return res.status(500).send('Internal Server Error');
            }
            return res.status(200).json({
                success: true,
                message: `Logout successful. Goodbye!`,
                email: user.emails[0].value ,
            });
        });
    });
}

//------------------- Get all students with Auth -------------------//

const getUserData = async (req, res) => {

    try {
        const userData = req.user;
        res.send(userData)
    } catch (error) {
        Response.sendServerError(res);
    }
}

module.exports = { getUserData, login, homePage, callback, isLoggedIn, logout , testRepo };


