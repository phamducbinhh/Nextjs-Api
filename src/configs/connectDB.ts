import { Sequelize } from "sequelize";
import mysql2 from "mysql2";
import envConfig from "@/configs/env";

const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } = envConfig;

if (!DB_HOST || !DB_USER || !DB_PASSWORD || !DB_NAME) {
  throw new Error(
    "Missing required environment variables for database connection."
  );
}

const port = Number(DB_PORT) || 3306;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: port,
  dialect: "mysql",
  dialectModule: mysql2,
  timezone: "+07:00",
  logging: false,
});

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();

    await sequelize.sync({ alter: true });
    
    console.log("Database connected.");
  } catch (error) {
    console.error(
      "Unable to connect to the database:",
      error instanceof Error ? error.message : error
    );
    throw error;
  }
};

export { sequelize, connectDatabase };
