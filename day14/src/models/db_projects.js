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
      duration: DataTypes.STRING,
      content: DataTypes.STRING,
      nodejs: DataTypes.BOOLEAN,
      reactjs: DataTypes.BOOLEAN,
      nextjs: DataTypes.BOOLEAN,
      typescript: DataTypes.BOOLEAN,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "db_projects",
    }
  );
  return db_projects;
};
