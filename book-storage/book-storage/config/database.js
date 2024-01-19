const { Sequelize, DataTypes } = require("sequelize");

// db connection
const sequelize = new Sequelize("books_storage", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

//  creating instanse
const db = {};
db.Sequelize = Sequelize;

db.User = require("../models/userModel")(sequelize, DataTypes);
db.Books = require("../models/bookModel")(sequelize, DataTypes);


(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing models:", error);
  }
})();

module.exports = db;