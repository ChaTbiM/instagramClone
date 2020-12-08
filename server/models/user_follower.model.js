module.exports = (sequelize, DataTypes) => {
  const UserFollower = sequelize.define(
    "UserFollower",
    {
      followed_id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        allowNull: false,
      },
      follower_id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        allowNull: false,
      },
    },
    {
      tableName: "user_follower",
    }
  );

  return UserFollower;
};
