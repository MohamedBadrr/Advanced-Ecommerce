import * as Yup from "yup";

export type LoginValues = {
  email: string;
  password: string;
};

export const LoginValidationSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "First Name must be at least 8 characters"),
});