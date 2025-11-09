require('dotenv').config();
const path = require('path');
const { ServerFactory } = require('../../core');
const routes = require('./routes');

const PORT = process.env.HOME_PORT || 3000;

// App oluştur
const app = ServerFactory.createApp({
  viewEngine: true,
  viewsPath: path.join(__dirname, 'views'),
  staticPath: path.join(__dirname, 'public')
});

// Routes
app.use('/', routes);

// 404 & Error handlers
app.use(ServerFactory.notFoundHandler);
app.use(ServerFactory.errorHandler);

// Server'ı başlat
if (require.main === module) {
  ServerFactory.startServer(app, PORT, 'Home Module');
}

module.exports = app;
