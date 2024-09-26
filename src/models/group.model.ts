import { sequelize } from "@/configs/connectDB";
import { DataTypes } from "sequelize";

const GroupModel = sequelize.define(
  "group",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "group",
  }
);

export default GroupModel;
