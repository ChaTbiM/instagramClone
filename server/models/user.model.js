module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
        unique: true,
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
    // User.hasMany(models.Post, {
    //   foreignKey: {
    //     type: DataTypes.UUID,
    //     name: "user_id",
    //   },
    // });

    // await User.belongsToMany(models.User, {
    //   foreignKey: {
    //     name: "follower_id",
    //   },
    //   as: "follower",
    //   through: models.UserFollower,
    // });

    // await User.belongsToMany(models.User, {
    //   foreignKey: {
    //     name: "followed_id",
    //   },
    //   as: "followed",
    //   through: models.UserFollower,
    // });
    User.belongsToMany(models.User, {
      foreignKey: "followed_id", // followed_id === user_id
      otherKey: "follower_id", // follower_id === other_user_id
      as: "followers", // getFollowers()
      through: "user_follower",
    });
    User.belongsToMany(models.User, {
      foreignKey: "follower_id", // follower_id === user_id
      otherKey: "followed_id", // followed_id === other_user_id
      as: "following", // getFollowing()
      through: "user_follower",
    });
  };

  return User;
};
