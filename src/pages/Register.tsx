import CustomInput from "@/components/Form/CustomInput";
import {
  RegisterValues,
  validationSchema,
} from "@/components/validations/Registiration";
import { actAuthRegister, resetAuthState } from "@/store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate , Navigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [error , setError] = useState("");
  const {loading , loginData} = useAppSelector((state)=>state.auth)
  const dispatch = useAppDispatch();
  const initialValues: RegisterValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  
  const handleSubmitRegistration = (values: RegisterValues) => {
    const { firstName, lastName, email, password } = values;
    dispatch(actAuthRegister({ firstName, lastName, email, password }))
      .unwrap()
      .then(() => {
        navigate("/login?message=account_created");
      })
      .catch(() => {
        setError("Email Already Exists.");
      });
  };
    useEffect(() => {
      dispatch(resetAuthState());
    }, [dispatch]);

    if(loginData.accessToken) {
      return <Navigate to="/" replace={true} />
    };
  return (
    <section className="flex flex-col items-center justify-center w-full h-full p-4">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitRegistration}
        validationSchema={validationSchema}
      >
        {({ errors, touched, handleSubmit }) => (
          <div className="flex flex-col items-start w-full max-w-[600px] justify-start p-4">
            <h1 className="text-[40px] font-semibold mb-5">
              Registration Form
            </h1>
            {error && <div><p className="w-[320px] md:w-[650px] text-center my-5 p-3 text-white max-w-full rounded-sm bg-red-400 ">{error}</p></div>}
            <CustomInput
              errors={errors.firstName}
              type="text"
              id="FirstName"
              name="firstName"
              touched={touched.firstName}
              label="First Name"
            />

            <CustomInput
              errors={errors.lastName}
              type="text"
              id="LastName"
              name="lastName"
              touched={touched.lastName}
              label="Last Name"
            />

            <CustomInput
              errors={errors.email}
              type="text"
              id="email"
              name="email"
              touched={touched.email}
              label="Email"
            />

            <CustomInput
              errors={errors.password}
              type="password"
              id="password"
              name="password"
              touched={touched.password}
              label="Password"
            />

            <CustomInput
              errors={errors.confirmPassword}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              touched={touched.confirmPassword}
              label="Confirm Password"
            />

            <button
              className=" px-8 rounded-md py-[5px] bg-mainColor text-white"
              onClick={() => handleSubmit()}
              disabled={loading==="pending" ? true : false}
            >
              {loading==="pending" ? <>Loading...</>:<>Submit</>}
            </button>
          </div>
        )}
      </Formik>
    </section>
  );
};

export default Register;
