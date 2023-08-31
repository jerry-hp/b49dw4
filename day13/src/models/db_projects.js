"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class db_projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  db_projects.init(
    {
      title: DataTypes.STRING,
      start_date: DataTypes.DATEONLY,
      end_date: DataTypes.DATEONLY,
      description: DataTypes.STRING,
      technologies: DataTypes.JSONB,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "db_projects",
      timestamps: true,
      createdAt: true,
      updatedAt: "updateTimestamps",
    }
  );
  return db_projects;
};
