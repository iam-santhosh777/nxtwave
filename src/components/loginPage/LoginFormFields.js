// LoginFormFields.js
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const LoginFormFields = () => {
  return (
    <>
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
        <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-end text-sm mt-1" />
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
        <ErrorMessage name="password" component="div" className="text-red-500 text-end text-sm mt-1" />
      </div>
    </>
  );
};

export default LoginFormFields;
