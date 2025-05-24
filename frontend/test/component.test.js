import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

// Mock axios
jest.mock('axios');

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const mockSetIsauthorised = jest.fn();
const mockSetUser = jest.fn();

// Mock context
jest.mock('../main.jsx', () => ({
  context: React.createContext({
    setIsauthorised: mockSetIsauthorised,
    setUser: mockSetUser,
  }),
}));

describe('Login Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders login form', () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    expect(screen.getByPlaceholderText('Enter Your Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter Password')).toBeInTheDocument();
    expect(screen.getByText('Log In')).toBeInTheDocument();
  });

  test('shows error message when login fails', async () => {
    axios.post.mockRejectedValue({
      response: {
        data: { message: 'Invalid credentials' },
      },
    });

    render(
      <Router>
        <Login />
      </Router>
    );

    fireEvent.change(screen.getByPlaceholderText('Enter Your Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter Password'), {
      target: { value: 'wrongpassword' },
    });
    fireEvent.click(screen.getByText('Log In'));

    // Wait for the error message
    await screen.findByText('Invalid credentials');
    expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
    expect(mockSetIsauthorised).not.toHaveBeenCalled();
    expect(mockSetUser).not.toHaveBeenCalled();
  });

  test('navigates to home page on successful login', async () => {
    axios.post.mockResolvedValue({
      data: {
        message: 'Login successful',
        user: { id: '123', name: 'Test User' },
      },
    });

    render(
      <Router>
        <Login />
      </Router>
    );

    fireEvent.change(screen.getByPlaceholderText('Enter Your Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter Password'), {
      target: { value: 'correctpassword' },
    });
    fireEvent.click(screen.getByText('Log In'));

    // Wait for the success message
    await screen.findByText('Login successful');
    expect(screen.getByText('Login successful')).toBeInTheDocument();
    expect(mockSetIsauthorised).toHaveBeenCalledWith(true);
    expect(mockSetUser).toHaveBeenCalledWith({ id: '123', name: 'Test User' });
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  test('displays no server response error when server is unavailable', async () => {
    axios.post.mockRejectedValue({
      request: {},
    });

    render(
      <Router>
        <Login />
      </Router>
    );

    fireEvent.change(screen.getByPlaceholderText('Enter Your Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter Password'), {
      target: { value: 'password' },
    });
    fireEvent.click(screen.getByText('Log In'));

    // Wait for the error message
    await screen.findByText('No response from server. Please try again later.');
    expect(
      screen.getByText('No response from server. Please try again later.')
    ).toBeInTheDocument();
  });
});
