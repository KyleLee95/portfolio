const Sequelize = require('sequelize')
const db = require('../db')

const Project = db.define('project', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
  },
  gitHubLink: {
    type: Sequelize.STRING
  },
  deployLink: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING
  }
})

module.exports = Project
