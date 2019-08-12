const Sequelize = require('sequelize')
const db = require('../db')

const Mood = db.define('moods', {
  type: {
    type: Sequelize.ENUM,
    values: ['VIDEO', 'IMAGE', 'TEXT']
  },
  url: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.TEXT
  }
})

module.exports = Mood
