// Jest setup file for backend tests
const mongoose = require('mongoose');

// Mock console methods to reduce test noise
global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

// Set test environment variables
process.env.NODE_ENV = 'test';
process.env.PORT = '3001';

// Handle MongoDB connection for tests
beforeAll(async () => {
  // Mock MongoDB connection for testing
  jest.spyOn(mongoose, 'connect').mockImplementation(() => Promise.resolve());
  jest.spyOn(mongoose, 'disconnect').mockImplementation(() => Promise.resolve());
});

afterAll(async () => {
  // Clean up after all tests
  jest.restoreAllMocks();
});
