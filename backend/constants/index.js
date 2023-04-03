const { config } = require("dotenv")
config()

module.exports = {
  PORT: process.env.PORT,
  SERVER_URL: process.env.SERVER_URL,
  CLIENT_URL: process.env.CLIENT_URL,
  SECRET: process.env.SECRET,
  HOST: process.env.HOST,
  DB_PASSWORD: process.env.DB_PASSWORD,
}
