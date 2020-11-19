module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Story",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true,
      },
      image: DataTypes.TEXT,
      timer: {
        type: DataTypes.INTEGER,
        defaultValue: 60,
      },
    },
    {
      tableName: "stories",
    }
  );
};
