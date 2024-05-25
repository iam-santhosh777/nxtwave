// src/components/__tests__/Login.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from '../LoginPage/Login';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { setUser } from '../../utils/userSlice';

// Mock react-router-dom's useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

// Mock react-redux hooks
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const mockStore = configureStore([]);

describe('LoginPage component', () => {
  let store;
  let dispatch;

  beforeEach(() => {
    store = mockStore({});
    dispatch = jest.fn();
    jest.clearAllMocks(); // Clear all mock calls between tests
  });

  it('renders login form correctly', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );

    expect(screen.getByText(/Login \/ SignUp/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
  });

  it('allows user to fill and submit the form with correct credentials', async () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );

    // Fill in the form
    userEvent.type(screen.getByLabelText(/Phone Number:/i), '1234567890');
    userEvent.type(screen.getByLabelText(/Password:/i), 'password123');

    // Mock the API call and dispatch setUser action
    dispatch.mockImplementationOnce(() => Promise.resolve());
    useDispatch.mockReturnValue(dispatch);
    setUser.mockReturnValueOnce({ type: 'user/setUser' });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    // Check if login success message is shown
    expect(await screen.findByText(/Login successful!/i)).toBeInTheDocument();
  });

  it('shows error on invalid credentials', async () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );

    // Fill in the form with invalid credentials
    userEvent.type(screen.getByLabelText(/Phone Number:/i), 'invalid');
    userEvent.type(screen.getByLabelText(/Password:/i), 'invalid');

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    // Check if error message is shown
    expect(await screen.findByText(/Invalid phone number or password/i)).toBeInTheDocument();
  });

  it('validates phone number and password fields', async () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );

    // Fill in the form with invalid phone number
    userEvent.type(screen.getByLabelText(/Phone Number:/i), '123');
    userEvent.type(screen.getByLabelText(/Password:/i), 'invalid');

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    // Check if validation error messages are shown
    expect(await screen.findByText(/Phone number must be 10 digits/i)).toBeInTheDocument();
    expect(await screen.findByText(/Password must be at least 6 characters/i)).toBeInTheDocument();
  });
});
