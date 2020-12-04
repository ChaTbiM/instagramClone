const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      avatar: DataTypes.STRING,
    },
    {
      tableName: "user",
    }
  );

  const models = sequelize.models;

  User.associate = (models) => {
    User.belongsToMany(models.User, {
      foreignKey: {
        type: DataTypes.UUID,
        name: "followedId",
      },
      through: models.UserFollower,
      as: "followers",
    });

    User.belongsToMany(models.User, {
      foreignKey: {
        type: DataTypes.UUID,
        name: "followerId",
      },
      as: "following",
      through: models.UserFollower,
    });
  };

  return User;
};
