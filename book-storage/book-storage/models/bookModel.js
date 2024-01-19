const db = require("../config/database");

module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('books', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_url: {
        type: DataTypes.STRING,
    },
    auther: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {

  });

  return Books;
}