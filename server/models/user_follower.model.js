module.exports = (sequelize, DataTypes) => {
  const UserFollower = sequelize.define(
    "UserFollower",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true,
      },
      followedId: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        allowNull: false,
      },
      followerId: {
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
