"use server";

import UserModel from "@/models/user.model";

export const getUserList = async () => {
  try {
    const response = await UserModel.findAll({
      attributes: [
        "id",
        "username",
        "email",
        "phone",
        "address",
        "sex",
        "groupId",
      ],
    });

    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getUserById = async (id: number): Promise<any> => {
  const user = await UserModel.findByPk(id, {
    attributes: [
      "id",
      "username",
      "email",
      "phone",
      "address",
      "sex",
      "groupId",
    ],
  });

  if (!user) {
    throw new Error(`Không tìm thấy người dùng với id đã cho`);
  }

  return user;
};

export const deleteUserList = async (id: number) => {
  try {
    const user = await UserModel.findByPk(id);

    if (!user) {
      throw new Error("Không tìm thấy người dùng với id đã cho");
    }

    await user.destroy();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateUserService = async (body: any, id: number) => {
  const { username, address, sex, groupId } = body;
  try {
    await UserModel.update(
      {
        username,
        address,
        sex,
        groupId,
      },
      {
        where: {
          id,
        },
      }
    );
  } catch (error: any) {
    throw new Error(error.message);
  }
};
