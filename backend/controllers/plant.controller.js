const db = require("../models")
const Plant = db.plant
const Op = db.Sequelize.Op

// Create and save a new plant
exports.create = (req, res) => {
  // validation
  if (!req.body.name) {
    res.status(400).send({
      message: "Please add a name!",
    })
    return
  }

  const plant = {
    name: req.body.name,
    description: req.body.description,
    planting_considerations: req.body.planting_considerations,
    when_to_plant: req.body.when_to_plant,
    growing_from_seed: req.body.growing_from_seed,
    spacing: req.body.growing_from_seed,
    watering: req.body.watering,
    other_care: req.body.other_care,
    diseases: req.body.diseases,
    harvesting: req.body.harvesting,
    optimal_sun: req.body.optimal_sun,
  }

  Plant.create(plant)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      })
    })
}

// Retrieve all plants from database
exports.findAll = (req, res) => {
  const name = req.query.name

  var condition = name ? { name: { [Op.iLike]: `%${name}}%` } } : null

  Plant.findAll({ where: condition })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving plants.",
      })
    })
}

// Find plant by Id
exports.findOne = (req, res) => {
  const id = req.params.id

  Plant.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Plant with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Plant with id=" + id,
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id

  Plant.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Plant was updated successfully.",
        })
      } else {
        res.send({
          message: `Cannot update Plant with id=${id}. Maybe Plant was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating plant with id=" + id,
      })
    })
}
// Delete plant by Id
exports.delete = (req, res) => {
  const id = req.params.id

  Plant.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Plant was deleted successfully!",
        })
      } else {
        res.send({
          message: `Cannot delete Plant with id=${id}. Maybe Plant was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Plant with id=" + id,
      })
    })
}
// delete all plants from database
exports.deleteAll = (req, res) => {
  Plant.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Plants were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all plants.",
      })
    })
}
