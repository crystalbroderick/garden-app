const passport = require("passport")
const JwtStrategy = require("passport-jwt").Strategy
const { SECRET } = require("../constants")
const db = require("../models")
const User = db.user

// custom extractor function for cookie-parser middleware
// extracts the JWT in a cookie
const cookieExtractor = function (req) {
  var token = null
  if (req && req.cookies) {
    token = req.cookies["token"]
  }
  return token
}

const opts = {
  secretOrKey: SECRET,
  jwtFromRequest: cookieExtractor,
}

passport.use(
  new JwtStrategy(opts, async ({ id }, done) => {
    try {
      const user = User.findByPk(id)
      console.log(user)
      if (!user) {
        throw new Error("401 not authorized")
      }

      return await done(null, user)
    } catch (error) {
      console.log(error.message)
      done(null, false)
    }
  })
)
