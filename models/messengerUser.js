"use strict";

module.exports = function(sequelize, DataTypes) {
  const MessengerUser = sequelize.define('MessengerUser', {
    messengerID: { type: DataTypes.BIGINT, unique: true, allowNull: false }
  }, {
    classMethods: {
      associate: function(models) {
        // allows to build relations
        // MessengerUser.hasMany(models.BitgoUser);
      }
    }
  });

  return MessengerUser;
};