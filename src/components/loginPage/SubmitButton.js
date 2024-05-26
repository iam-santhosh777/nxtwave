// SubmitButton.js
import React from 'react';

const SubmitButton = ({ isValid, dirty, isSubmitting }) => {
  return (
    <button
      type="submit"
      className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
        !(isValid && dirty) ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={!isValid || !dirty || isSubmitting}
    >
      {isSubmitting ? "Submitting..." : "Login"}
    </button>
  );
};

export default SubmitButton;
