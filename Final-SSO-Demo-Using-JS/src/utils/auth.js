const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require("dotenv").config();


passport.use(new GoogleStrategy({
  clientID: "1049958925461-3lvi94t8jt21phmj2ji9m8g5qbmbgruv.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "http://localhost:4000/Student/Auth/login/callback",
  passReqToCallback: true,
},

function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});