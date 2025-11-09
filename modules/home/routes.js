const express = require('express');
const { RouterHelper } = require('../../core');
const HomeController = require('./controllers/HomeController');

const router = express.Router();
const homeController = new HomeController();

// Route tanımlamaları
const routes = [
  { method: 'get', path: '/', handler: 'index' },
  { method: 'get', path: '/about', handler: 'about' }
];

// Route'ları controller'a bağla
RouterHelper.bindRoutes(router, homeController, routes);

module.exports = router;
