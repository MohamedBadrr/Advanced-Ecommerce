import CustomInput from "@/components/Form/CustomInput";
import {
  LoginValidationSchema,
  LoginValues,
} from "@/components/validations/LoginValidation";
import { actAuthLogin, resetAuthState } from "@/store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams , Navigate } from "react-router-dom";

const Login = () => {
  const [searchParams , setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { loading , loginData} = useAppSelector((state) => state.auth);

  const initialValues: LoginValues = {
    email: "",
    password: "",
  };
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const handleSubmitLogin = (values: LoginValues) => {
    dispatch(actAuthLogin(values))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        if (error === "Cannot find user") {
          setError("Email Not Found.");
          setSearchParams("")
        } else {
          setError(error);
          setSearchParams("");
        }
      });
    console.log(values);
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
        onSubmit={handleSubmitLogin}
        validationSchema={LoginValidationSchema}
        validateOnBlur={true}
      >
        {({ errors, touched, handleSubmit }) => (
          <div className="flex flex-col items-start w-full max-w-[600px] justify-start p-4">
            {error && (
              <div>
                <p className="w-[320px] md:w-[650px] text-center my-5 p-3 text-white max-w-full rounded-sm bg-red-400 ">
                  {error.toString()}
                </p>
              </div>
            )}
            {searchParams.get("message") === "account_created" && (
              <div>
                <p className="w-[320px] md:w-[650px] text-center my-5 p-3 text-white max-w-full rounded-sm bg-green-400 ">
                  Account Created Successfully, Login Now.{" "}
                </p>
              </div>
            )}

            <h1 className="text-[40px] font-semibold mb-5">Login Form</h1>
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
              disabled={loading === "pending" ? true : false}
            >
              {loading === "pending" ? <>Loading...</> : <>Login </>}
            </button>
          </div>
        )}
      </Formik>
    </section>
  );
};

export default Login;
