const request = require('supertest');
const express = require('express');

// Mock the server without starting it
const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  // Basic health check route
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' });
  });
  
  // Mock routes for testing
  app.get('/api/test', (req, res) => {
    res.status(200).json({ message: 'Test endpoint working' });
  });
  
  // 404 handler
  app.use('*', (req, res) => {
    res.status(404).json({ error: 'Route not found' });
  });
  
  return app;
};

describe('Server Tests', () => {
  let app;
  
  beforeAll(() => {
    app = createApp();
  });
  
  describe('Health Check', () => {
    test('GET /health should return 200 status', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);
      
      expect(response.body.status).toBe('OK');
      expect(response.body.message).toBe('Server is running');
    });
  });
  
  describe('API Routes', () => {
    test('GET /api/test should return test message', async () => {
      const response = await request(app)
        .get('/api/test')
        .expect(200);
      
      expect(response.body.message).toBe('Test endpoint working');
    });
  });
  
  describe('404 Handler', () => {
    test('GET /nonexistent should return 404', async () => {
      const response = await request(app)
        .get('/nonexistent')
        .expect(404);
      
      expect(response.body.error).toBe('Route not found');
    });
  });
});
