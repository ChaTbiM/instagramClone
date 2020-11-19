module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true,
      },
      image: DataTypes.STRING,
      sincePublished: DataTypes.INTEGER,
      numberOfLikes: DataTypes.INTEGER,
    },
    {
      tableName: "posts",
    }
  );

  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        type: DataTypes.UUID,
      },
    });

    Post.hasMany(models.Comment, {
      foreignKey: {
        name: "postId",
        type: DataTypes.UUID,
      },
    });
  };

  return Post;
};
