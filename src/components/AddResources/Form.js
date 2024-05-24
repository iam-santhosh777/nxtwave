import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ResourceForm = ({ onSubmit }) => {
  return (
    <Formik className="w-[50%]"
      initialValues={{
        itemTitle: '',
        link: '',
        iconUrl: '',
        tagName: '',
        category: '',
        description: '',
      }}
      validationSchema={Yup.object().shape({
        itemTitle: Yup.string().required('Item Title is required'),
        link: Yup.string().url('Invalid URL').required('Link is required'),
        iconUrl: Yup.string().url('Invalid URL').required('Icon URL is required'),
        tagName: Yup.string().required('Tag Name is required'),
        category: Yup.string().required('Category is required'),
        description: Yup.string().required('Description is required'),
      })}
      onSubmit={onSubmit}
    >
      {({ isValid, dirty, isSubmitting }) => (
        <Form className="w-[25%]">
          <div>
            <label htmlFor="itemTitle" className="block text-start text-sm font-medium text-gray-700">
              Item Title:
            </label>
            <Field
              name="itemTitle"
              type="text"
              placeholder="Enter Item Title"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage
              name="itemTitle"
              component="div"
              className="text-red-500 text-end text-sm mt-1"
            />
          </div>

          <div>
            <label htmlFor="link" className="block text-start text-sm font-medium text-gray-700">
              Link:
            </label>
            <Field
              name="link"
              type="text"
              placeholder="Enter Link"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage
              name="link"
              component="div"
              className="text-red-500 text-end text-sm mt-1"
            />
          </div>

          <div>
            <label htmlFor="iconUrl" className="block text-start text-sm font-medium text-gray-700">
              Icon URL:
            </label>
            <Field
              name="iconUrl"
              type="text"
              placeholder="Enter Icon URL"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage
              name="iconUrl"
              component="div"
              className="text-red-500 text-end text-sm mt-1"
            />
          </div>

          <div>
            <label htmlFor="tagName" className="block text-start text-sm font-medium text-gray-700">
              Tag Name:
            </label>
            <Field
              as="select"
              name="tagName"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" label="Select Tag" />
              <option value="user">User</option>
              <option value="resource">Resource</option>
              <option value="request">Request</option>
            </Field>
            <ErrorMessage
              name="tagName"
              component="div"
              className="text-red-500 text-end text-sm mt-1"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-start text-sm font-medium text-gray-700">
              Category:
            </label>
            <Field
              name="category"
              type="text"
              placeholder="Enter Category"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage
              name="category"
              component="div"
              className="text-red-500 text-end text-sm mt-1"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-start text-sm font-medium text-gray-700">
              Description:
            </label>
            <Field
              name="description"
              as="textarea"
              placeholder="Enter Description"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-500 text-end text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              !(isValid && dirty) ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!isValid || !dirty || isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ResourceForm;
