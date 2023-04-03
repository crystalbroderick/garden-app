module.exports = (sequelize, Sequelize) => {
  const Plant = sequelize.define("plant", {
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING(500),
    },
    planting_considerations: {
      type: Sequelize.STRING(1000),
    },
    when_to_plant: {
      type: Sequelize.STRING(1000),
    },
    growing_from_seed: {
      type: Sequelize.STRING(1000),
    },
    spacing: {
      type: Sequelize.STRING(1000),
    },
    watering: {
      type: Sequelize.STRING(1000),
    },
    other_care: {
      type: Sequelize.STRING(1000),
    },
    optimal_sun: {
      type: Sequelize.ENUM("full_sun", "part_sun", "part_shade", "full_shade"),
    },
    diseases: {
      type: Sequelize.STRING(1000),
    },
    harvesting: {
      type: Sequelize.STRING(1000),
    },
  })

  return Plant
}
