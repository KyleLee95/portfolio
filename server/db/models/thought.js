const Sequelize = require('sequelize')
const db = require('../db')

const Thought = db.define('thoughts', {
  title: {
    type: Sequelize.TEXT,
    unique: true,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT
  }
})

module.exports = Thought
