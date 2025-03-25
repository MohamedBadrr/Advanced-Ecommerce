import CustomInput from "@/components/Form/CustomInput";
import { RegisterValues, validationSchema } from "@/components/validations/Registiration";
import { Formik } from "formik";



const Register = () => {
  const initialValues: RegisterValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const handleSubmitRegistration = (values: RegisterValues) => {
    console.log(values);
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
            >
              Register
            </button>
          </div>
        )}
      </Formik>
    </section>
  );
};

export default Register;
