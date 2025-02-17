import { sequelize } from "@/configs/connectDB";
import GroupModel from "@/models/group.model";
import { DataTypes } from "sequelize";

const UserModel = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true, // Không bắt buộc
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true, // Không bắt buộc
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: true, // Không bắt buộc
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: GroupModel,
        key: "id",
      },
    },
  },
  {
    tableName: "users",
  }
);

UserModel.belongsTo(GroupModel, { foreignKey: "groupId" });

export default UserModel;
