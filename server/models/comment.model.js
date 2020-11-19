module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true,
      },
      image: DataTypes.TEXT,
    },
    {
      tableName: "comments",
    }
  );

  const models = sequelize.models;

  Comment.associate = (models) => {
    Comment.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        type: DataTypes.UUID,
      },
    });
  };
};
