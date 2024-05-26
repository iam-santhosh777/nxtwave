# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Project Overview

## Overview

This project implements a responsive and styled interface using Tailwind CSS, manages state with Redux, and handles API requests with Axios. It includes a login/logout system and various features for managing resources.

## Features

### 1. Login Page

- Created a login page with example credentials:
  - Phone Number: `1234567890`
  - Password: `password123`
- User credentials are stored in `localStorage` upon successful login.
- Error handling for incorrect credentials using React Toastify.
- Navigation to the resource page is restricted until successful login.

### 2. Resource Page

- Implemented three tabs: Resource, Request, and User.
- Pagination with 6 items per page in each tab.
- Added navigation button to redirect to the add resources page.

### 3. Add Resource Page

- Created a form with fields:
  - Item Title
  - Link
  - Icon URL
  - Tag Name Dropdown
  - Category
  - Description
- Used POST method to submit data to the API.
- Success messages displayed using React Toastify upon successful submission.
- Form validation implemented using Formik.

## Additional Features

- Clicking on the profile image in the navigation bar displays a logout option.
- Logging out redirects the user to the login page.
- Page access via URLs is restricted after logout.

## Technologies Used

- React
- Tailwind CSS
- Redux
- Axios
- React Toastify
- Formik (for form validation)

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the development server: `npm start`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
