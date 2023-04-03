const { DB_PASSWORD, HOST } = require("../constants")

module.exports = {
  HOST: HOST,
  USER: "postgres",
  PASSWORD: DB_PASSWORD,
  DB: "balconybotany",
  dialect: "postgres",
  // for sequelize connection pool config (models/index)
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}
