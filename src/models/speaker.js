const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Speaker = sequelize.define("Speaker", {
    expertise: { type: DataTypes.STRING, allowNull: false },
    price_per_session: { type: DataTypes.FLOAT, allowNull: false },
  });
  Speaker.associate = (models) => {
    Speaker.belongsTo(models.User, { foreignKey: "user_id" });
  };
  return Speaker;
};
