'use strict'
module.exports = (sequelize, DataTypes) => {
  const papers = sequelize.define('papers', {
    paperName: DataTypes.STRING,
    image: DataTypes.BLOB
  }, {})
  papers.associate = function (models) {
    // associations can be defined here
  }
  return papers
}
