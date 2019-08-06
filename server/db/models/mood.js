const Sequelize = require('sequelize')
const db = require('../db')

const Mood = db.define('moods', {
  type: {
    type: Sequelize.STRING
  },
  url: {
    type: Sequelize.STRING
  }
})

module.exports = Mood
