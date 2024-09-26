import { z } from "zod";

const configSchema = z.object({
  PORT: z.string(),
  DB_HOST: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_PORT: z.any(),
  DB_NAME: z.string(),
  SALT_ROUNDS: z.string(),
  JWT_SECRET_KEY: z.string(),
  JWT_EXPIRES_IN: z.string(),
});

const configProject = configSchema.safeParse({
  PORT: process.env.PORT,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  SALT_ROUNDS: process.env.SALT_ROUNDS,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
});

if (!configProject.success) {
  console.error(configProject.error.issues);
  throw new Error("Các giá trị khai báo trong file .env không hợp lệ");
}

const envConfig = configProject.data;

export default envConfig;
