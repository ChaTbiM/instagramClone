module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      image: DataTypes.STRING,
      sincePublished: DataTypes.INTEGER,
      numberOfLikes: DataTypes.INTEGER,
    },
    {
      tableName: "post",
    }
  );

  const models = sequelize.models;

  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: {
        name: "user_id",
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
