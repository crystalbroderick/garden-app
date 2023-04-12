const express = require("express")
const app = express()
const { PORT, CLIENT_URL, SERVER_URL } = require("./constants")
const cors = require("cors")
const db = require("./models")
const cookieParser = require("cookie-parser")
const passport = require("passport")

// Initialize middleware
require("./middleware/passport")
app.use(express.json()) // parse requests of content-type application/json
app.use(express.urlencoded({ extended: true })) // parse requests of content-type - application/x-www-form-urlencoded
app.use(cors({ origin: CLIENT_URL }))
app.use(cookieParser())
app.use(passport.initialize())

// FOR DEVELOPMENT:
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.")
// })

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced database")
  })
  .catch((e) => {
    console.log("Failed to sync database: ", e.message)
  })

// // Import routes
require("./routes/plant.routes")(app)
require("./routes/auth.routes")(app)

// // initialize routes
//app.use("/api", plantRoutes)

// Listen for requests
const port = PORT || 8000
const appStart = () => {
  try {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })
  } catch (e) {
    console.log(`Error: ${error.message}`)
  }
}

appStart()
