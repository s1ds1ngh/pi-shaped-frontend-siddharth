import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

// Mock the LazySettings component to avoid issues with lazy loading in tests
jest.mock('./components/LazySettings', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="settings-panel">Mocked Settings Panel</div>,
  };
});

test('counter increments correctly', () => {
  render(<App />);
  
  // Find the initial count display
  const countElement = screen.getByText(/Count: 5/i);
  expect(countElement).toBeInTheDocument();
  
  // Find and click the increment button
  const incrementButton = screen.getByText(/Increment/i);
  fireEvent.click(incrementButton);
  
  // Check if the count has been incremented
  expect(screen.getByText(/Count: 6/i)).toBeInTheDocument();
});

test('lazy-loaded component appears when button is clicked', async () => {
  render(<App />);
  
  // Initially, the settings panel should not be visible
  expect(screen.queryByTestId('settings-panel')).not.toBeInTheDocument();
  
  // Find and click the show settings button
  const showSettingsButton = screen.getByText(/Show Settings/i);
  fireEvent.click(showSettingsButton);
  
  // Wait for the lazy-loaded component to appear
  await waitFor(() => {
    expect(screen.getByTestId('settings-panel')).toBeInTheDocument();
  });
  
  // Check if the button text has changed
  expect(screen.getByText(/Hide Settings/i)).toBeInTheDocument();
});