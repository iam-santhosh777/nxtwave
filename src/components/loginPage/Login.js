import nxtwave_logo from "../../assets/NxtWave TM_Coloured logo 1.png";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { setUser } from "../../utils/userSlice";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const predefinedPhoneNumber = "1234567890"; // Replace with the desired phone number
  const predefinedPassword = "password123"; // Replace with the desired password

  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    if (values.phoneNumber === predefinedPhoneNumber && values.password === predefinedPassword) {
      dispatch(setUser({ phoneNumber: values.phoneNumber }));
      toast.success("Login successful!");
      setSubmitting(true)
      // Navigate to the resource page or perform any other action
      setTimeout(() => {
        navigate("/resource"); // Navigate to the resource page
      }, 1000); // Adjust delay if needed
      
    } else {
      toast.error("Invalid phone number or password");
    //   setErrors({ phoneNumber: "Invalid phone number or password", password: "Invalid phone number or password" });
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-white">
      <ToastContainer position="top-center"/>
      <div className="w-[50%] md:w-[50%] py-8 flex justify-center items-center">
        <img
          src={nxtwave_logo}
          alt="Placeholder"
          className="w-[50%] h-auto"
        />
      </div>
      <div className="w-[75%] md:w-[25%] p-8 shadow-lg rounded-lg">
        <h1 className="text-2xl mb-4 text-center">Login / SignUp</h1>
        <Formik
          initialValues={{ phoneNumber: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={Yup.object().shape({
            phoneNumber: Yup.string()
              .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
              .required("Phone number is required"),
            password: Yup.string()
              .min(6, "Password must be at least 6 characters")
              .required("Password is required"),
          })}
        >
          {({ isValid, dirty, isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="phoneNumber" className="block text-start text-sm font-medium text-gray-700">
                  Phone Number: 
                </label>
                <Field
                  name="phoneNumber"
                  type="text"
                  placeholder="Enter Your Phone Number"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-red-500 text-end text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-start text-sm font-medium text-gray-700">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-end text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  !(isValid && dirty) ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!isValid || !dirty || isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
