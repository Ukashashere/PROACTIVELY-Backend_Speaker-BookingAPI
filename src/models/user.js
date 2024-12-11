const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define("User", {
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    user_type: { type: DataTypes.ENUM("user", "speaker"), allowNull: false },
    is_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
  });
  return User;
};
