
import CustomInput from "@/components/Form/CustomInput";
import { LoginValidationSchema, LoginValues } from "@/components/validations/LoginValidation";
import { Formik } from "formik";



const Login = () => {
  const initialValues: LoginValues = {
    email: "",
    password: "",
  };
  const handleSubmitLogin = (values: LoginValues) => {
    console.log(values);
  };
  return (
    <section className="flex flex-col items-center justify-center w-full h-full p-4">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitLogin}
        validationSchema={LoginValidationSchema}
        validateOnBlur={true}
      >
        {({ errors, touched, handleSubmit }) => (
          <div className="flex flex-col items-start w-full max-w-[600px] justify-start p-4">
            <h1 className="text-[40px] font-semibold mb-5">
              Login Form
            </h1>
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

            <button
              className=" px-8 rounded-md py-[5px] bg-mainColor text-white"
              onClick={() => handleSubmit()}
            >
              Login
            </button>
          </div>
        )}
      </Formik>
    </section>
  );
};

export default Login;
