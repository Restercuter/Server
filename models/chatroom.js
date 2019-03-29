'use strict';
module.exports = (sequelize, DataTypes) => {
  const ChatRoom = sequelize.define('ChatRoom', {
    UserName: DataTypes.STRING,
    Messages: DataTypes.STRING
  }, {});
  ChatRoom.associate = function(models) {
    // associations can be defined here
  };
  return ChatRoom;
};
