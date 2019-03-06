module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    name:{ 
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })
