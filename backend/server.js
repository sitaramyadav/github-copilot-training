const express = require('express');
const axios = require('axios');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const port = 8080;

// Middleware to parse JSON bodies
app.use(express.json());

// Proxy POST request to /register to JSON Server
app.post('/register', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:3020/register', req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response ? error.response.status : 500).json({ error: error.message });
  }
});

// Proxy POST request to /login to JSON Server
app.post('/login', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:3020/login', req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response ? error.response.status : 500).json({ error: error.message });
  }
});

// Serve JSON Server on a different port
const jsonServerApp = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

jsonServerApp.use(middlewares);
jsonServerApp.use(router);

jsonServerApp.listen(3000, () => {
  console.log('JSON Server is running on http://localhost:3000');
});

// Start Express server
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
});