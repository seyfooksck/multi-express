const express = require('express');
const { RouterHelper } = require('../../core');
const ApiController = require('./controllers/ApiController');

const router = express.Router();
const apiController = new ApiController();

// Route tanımlamaları
const routes = [
  // Documentation
  { method: 'get', path: '/docs', handler: 'docs' },
  
  // Health check
  { method: 'get', path: '/health', handler: 'health' },
  
  // Products CRUD
  { method: 'get', path: '/products', handler: 'getProducts' },
  { method: 'get', path: '/products/:id', handler: 'getProduct' },
  { method: 'post', path: '/products', handler: 'createProduct' },
  { method: 'put', path: '/products/:id', handler: 'updateProduct' },
  { method: 'delete', path: '/products/:id', handler: 'deleteProduct' },
  
  // Users
  { method: 'get', path: '/users', handler: 'getUsers' },
  { method: 'get', path: '/users/:id', handler: 'getUser' }
];

// Route'ları controller'a bağla
RouterHelper.bindRoutes(router, apiController, routes);

module.exports = router;
