// LoginForm.js
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setUser } from '../../utils/userSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import LoginFormFields from './LoginFormFields';
import SubmitButton from './SubmitButton';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    if (values.phoneNumber === "1234567890" && values.password === "password123") {
      dispatch(setUser({ phoneNumber: values.phoneNumber }));
      toast.success("Login successful!");
      setSubmitting(true);
      setTimeout(() => {
        navigate("/resource"); // Navigate to the resource page
      }, 1000); // Adjust delay if needed
    } else {
      toast.error("Invalid phone number or password");
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={{ phoneNumber: "", password: "" }}
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
          <LoginFormFields />
          <SubmitButton isValid={isValid} dirty={dirty} isSubmitting={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
