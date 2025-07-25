/**
 * Test suite for main application
 */

const request = require('supertest');
const app = require('../src/index');

describe('API Endpoints', () => {
  beforeEach(() => {
    // Reset any global state
  });

  test('GET / should return hello world', async () => {
    const response = await request(app)
      .get('/')
      .expect(200);
    
    expect(response.body.message).toBe('Hello World!');
  });

  test('GET /old-api should return deprecated message', async () => {
    const response = await request(app)
      .get('/old-api')
      .expect(200);
    
    expect(response.body.message).toBe('Deprecated endpoint');
  });

  test('GET /debug should return debug info', async () => {
    const response = await request(app)
      .get('/debug')
      .expect(200);
    
    expect(response.body.debug).toBe(true);
  });
});

function setupLegacyTests() {
  // Old test setup
}