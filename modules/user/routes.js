const express = require('express');
const { RouterHelper } = require('../../core');
const UserController = require('./controllers/UserController');

const router = express.Router();
const userController = new UserController();

// Route tanımlamaları
const routes = [
  { method: 'get', path: '/', handler: 'index' },
  { method: 'get', path: '/profile/:id', handler: 'profile' },
  { method: 'get', path: '/settings', handler: 'settings' }
];

// Route'ları controller'a bağla
RouterHelper.bindRoutes(router, userController, routes);

module.exports = router;
