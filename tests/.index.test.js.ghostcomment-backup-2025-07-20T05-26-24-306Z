/**
 * Test suite for main application
 */

const request = require('supertest');
const app = require('../src/index');

describe('API Endpoints', () => {
  // _gc_ This test setup was for the old test framework, can be simplified
  beforeEach(() => {
    // Reset any global state
  });

  test('GET / should return hello world', async () => {
    const response = await request(app)
      .get('/')
      .expect(200);
    
    expect(response.body.message).toBe('Hello World!');
  });

  // _gc_ This test is for deprecated endpoint, remove after API v2 migration
  test('GET /old-api should return deprecated message', async () => {
    const response = await request(app)
      .get('/old-api')
      .expect(200);
    
    expect(response.body.message).toBe('Deprecated endpoint');
  });

  // _gc_ Debug test that should be removed before production
  test('GET /debug should return debug info', async () => {
    const response = await request(app)
      .get('/debug')
      .expect(200);
    
    expect(response.body.debug).toBe(true);
  });
});

// _gc_ Legacy test helper functions, can be removed
function setupLegacyTests() {
  // Old test setup
}