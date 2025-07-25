/**
 * Main application entry point
 */

const express = require('express');
const app = express();


function setupRoutes() {
  app.get('/old-api', (req, res) => {
    res.json({ message: 'Deprecated endpoint' });
  });

  app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
  });

  app.get('/debug', (req, res) => {
    res.json({ debug: true, env: process.env.NODE_ENV });
  });
}

function startServer() {
  const port = process.env.PORT || 3000;
  
  setupRoutes();
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

setTimeout(() => {
  startServer();
}, 100);

module.exports = app;