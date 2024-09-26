import * as yup from "yup";

export const registerSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Tên người dùng tối thiểu 3 ký tự")
      .required("Tên người dùng không được trống"),
    email: yup
      .string()
      .email("Email không hợp lệ")
      .required("Email không được để trống."),
    password: yup
      .string()
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
      .required("Password không được để trống."),
  });
  

  export const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Email không hợp lệ")
      .required("Email không được để trống."),
    password: yup
      .string()
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
      .required("Password không được để trống."),
  });
  