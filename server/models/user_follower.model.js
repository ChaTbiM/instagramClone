module.exports = (sequelize, DataTypes) => {
  const UserFollower = sequelize.define(
    "UserFollower",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      avatar: DataTypes.STRING,
    },
    {
      tableName: "users_followers",
    }
  );

  const models = sequelize.models;

  return UserFollower;
};
