const { hash } = require("bcryptjs")
const { SECRET } = require("../constants")
const { sign } = require("jsonwebtoken")
const db = require("../models")
const User = db.user
const Op = db.Sequelize.Op

// Retrieve all users from database
exports.findAll = async (req, res) => {
  User.findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving all users.",
      })
    })
}

// Register as a new user with hashed password
exports.register = async (req, res) => {
  try {
    const hashedPassword = await hash(req.body.password, 10)
    const user = { username: req.body.username, password: hashedPassword }
    await User.create(user).then((data) => {
      res.send(data)
    })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.login = async (req, res) => {
  let payload = {
    id: req.body.id,
    password: req.body.password,
  }

  try {
    const token = await sign(payload, SECRET)

    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({
        success: true,
        message: "Successful login",
        token: "JTW" + token,
      })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.logout = async (req, res) => {
  try {
    return res.status(200).clearCookie("token", { httpOnly: true }).json({
      success: true,
      message: "Successfully Logged out",
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

// Testing authorization
exports.allAccess = (req, res) => {
  res.status(200).send("Public content!")
}

exports.userGarden = (req, res) => {
  res
    .status(200)
    .send("User Content")
    .catch((e) => res.send("Can't view this content"))
}
