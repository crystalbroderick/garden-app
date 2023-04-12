module.exports = (app) => {
  const auth = require("../controllers/auth.controller.js")
  const { validationMiddleware } = require("../middleware/validation")
  const { registerValidation, loginValidation } = require("../validators/auth")
  const { userAuth } = require("../middleware/auth")
  var router = require("express").Router()

  // Create a new user
  router.post("/", registerValidation, validationMiddleware, auth.register)

  // Retrieve all users
  router.get("/", auth.findAll)

  // Login
  router.post("/login", loginValidation, validationMiddleware, auth.login)

  // Logout
  router.get("/logout", auth.logout)

  // Testing auth
  router.get("/test/all", auth.allAccess)
  router.get("/test/user", userAuth, auth.userGarden)

  app.use("/api/auth", router)
}
