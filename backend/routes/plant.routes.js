module.exports = (app) => {
  const plants = require("../controllers/plant.controller.js")

  var router = require("express").Router()

  // Create a new plant
  router.post("/", plants.create)

  // Retrieve all plants
  router.get("/", plants.findAll)

  // Retrieve a single plant with id
  router.get("/:id", plants.findOne)

  // Update a plant with id
  router.put("/:id", plants.update)

  // Delete a plant with id
  router.delete("/:id", plants.delete)

  // Delete all plants
  router.delete("/", plants.deleteAll)

  app.use("/api/plants", router)
}
