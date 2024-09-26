"use server";
import envConfig from "@/configs/env";
import generateToken from "@/configs/generateToken";
import UserModel from "@/models/user.model";
import bcrypt from "bcrypt";

// Mã hóa mật khẩu của người
const hashPasswordUser = async (password: string) =>
  bcrypt.hash(password, parseInt(envConfig.SALT_ROUNDS));

// Kiểm tra xem user đã tồn tại trong cơ sở dữ liệu hay chưa.
const isUserExists = async (field: "email" | "phone", value: string) => {
  const existingUser = await UserModel.findOne({ where: { [field]: value } });
  return !!existingUser;
};

// So sánh mật khẩu người dùng nhập vào với mật khẩu đã được mã hóa trong cơ sở dữ liệu.
const comparePassword = async (password: string, hashPassword: string) => {
  return await bcrypt.compare(password, hashPassword);
};

export const register = async ({
  email,
  phone,
  password,
  username,
}: {
  email: string;
  phone: string;
  password: string;
  username: string;
}) => {
  try {
    const [emailExists, phoneExists] = await Promise.all([
      isUserExists("email", email),
      isUserExists("phone", phone),
    ]);

    if (emailExists) throw new Error("Email đã tồn tại trong hệ thống");
    if (phoneExists) throw new Error("Số điện thoại đã tồn tại trong hệ thống");

    const hashPassword = await hashPasswordUser(password);
    const newUser = await UserModel.create({
      email,
      username,
      phone,
      password: hashPassword,
    });

    return {
      ...newUser.dataValues,
      password: "Not show",
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const user: any = await UserModel.findOne({ where: { email } });
    if (!user) throw new Error("Email không tồn tại trong hệ thống");

    const isPasswordMatch = await comparePassword(password, user.password);
    if (!isPasswordMatch) throw new Error("Mật khẩu không chính xác");

    return {
      id: user.id,
      email: user.email,
      username: user.username,
      token: generateToken(user.id),
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
