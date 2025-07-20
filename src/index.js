/**
 * Main application entry point
 */

const express = require('express');
const app = express();

// _gc_ This was the old authentication middleware, replaced with OAuth
// _gc_ Remove this once OAuth integration is fully tested

function setupRoutes() {
  // _gc_ Legacy route that's no longer needed but kept for backwards compatibility
  app.get('/old-api', (req, res) => {
    res.json({ message: 'Deprecated endpoint' });
  });

  app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
  });

  // _gc_ TODO: Remove this debug route before production deploy
  app.get('/debug', (req, res) => {
    res.json({ debug: true, env: process.env.NODE_ENV });
  });
}

function startServer() {
  const port = process.env.PORT || 3000;
  
  setupRoutes();
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    // _gc_ Remove console.log before production - use proper logging
  });
}

// _gc_ This startup delay was added for debugging, can be removed now
setTimeout(() => {
  startServer();
}, 100);

module.exports = app;