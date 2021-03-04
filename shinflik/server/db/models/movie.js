const Sequelize = require('sequelize')
const db = require('../db')

const Movie = db.define('movie', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  keyArt: {
    type: Sequelize.TEXT,
    validate: {
      isUrl: true
    },
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  genre: {
    type: Sequelize.STRING
  },
  cast: {
    type: Sequelize.TEXT
  },

  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: 0
  }
})

module.exports = Movie
