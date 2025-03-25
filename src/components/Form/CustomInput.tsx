
import { Field } from "formik";

 type CustomInputProps = {
    label:string,
    id:string,
    name:string,
    type:string,
    errors?:string,
    touched?:boolean,
 }
const CustomInput = ({label , id , name ,type = "text", errors , touched}:CustomInputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor="FirstName" className="block text-[18x] ">
        {label}
      </label>
      <Field
        type={type}
        className={`w-[320px] md:w-[650px] px-3 max-w-full rounded-sm h-[30px] border-[1px]
             focus:outline-none ${touched ? errors ? "border-red-500" : "border-green-500" : "border-black focus:border-gray-300"}`}
        id={id}
        name={name}
      />
      {touched && errors && (
        <p className="text-red-500 ">{errors}</p>
      )}
    </div>
  );
};

export default CustomInput;
