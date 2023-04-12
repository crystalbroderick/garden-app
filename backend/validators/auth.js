const { check } = require("express-validator")
const db = require("../models")
const User = db.user
const { compare } = require("bcryptjs")

// password
const password = check("password")
  .isLength({ min: 6, max: 15 })
  .withMessage("Password has to be between 6 and 15 characters.")

// username
const username = check("username")
  .isLength({ min: 4, max: 15 })
  .withMessage("Username has to be between 4 and 15 characters .")

// check if username already exists
const usernameExists = check("username").custom(async (value) => {
  await User.findOne({ where: { username: value } }).then((user) => {
    if (user) {
      throw new Error("User name already exists!")
    }
  })
})

// login validation
const loginFieldsCheck = check("username").custom(async (value, { req }) => {
  const user = await User.findOne({ where: { username: value } })
  console.log(user)
  if (!user) {
    throw new Error("Username not registered")
  }

  const validPassword = await compare(req.body.password, user.password)

  if (!validPassword) {
    throw new Error("Wrong password")
  }

  //req.user = user
})

module.exports = {
  registerValidation: [username, password, usernameExists],
  loginValidation: [loginFieldsCheck],
}
