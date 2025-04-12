import * as Yup from "yup";

export type RegisterValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("First Name is required")
    .min(5, "First Name must be at least 5 characters"),
  lastName: Yup.string()
    .required("Last Name is required")
    .min(5, "First Name must be at least 5 characters"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(3, "First Name must be at least 8 characters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Password must match"),
});