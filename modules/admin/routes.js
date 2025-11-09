const express = require('express');
const { RouterHelper } = require('../../core');
const AdminController = require('./controllers/AdminController');

const router = express.Router();
const adminController = new AdminController();

// Route tanımlamaları
const routes = [
  { method: 'get', path: '/', handler: 'dashboard' },
  { method: 'get', path: '/dashboard', handler: 'dashboard' },
  { method: 'get', path: '/users', handler: 'users' },
  { method: 'get', path: '/settings', handler: 'settings' },
  { method: 'get', path: '/reports', handler: 'reports' }
];

// Route'ları controller'a bağla
RouterHelper.bindRoutes(router, adminController, routes);

module.exports = router;
