require('dotenv').config();
const path = require('path');
const { ServerFactory } = require('../../core');
const routes = require('./routes');

const PORT = process.env.API_PORT || 3004;

// App oluştur (API için view engine gerekmez ama docs sayfası için gerekli)
const app = ServerFactory.createApp({
  viewEngine: true,
  viewsPath: path.join(__dirname, 'views')
});

// CORS middleware (API için önemli)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Routes
app.use('/', routes);

// 404 & Error handlers
app.use(ServerFactory.notFoundHandler);
app.use(ServerFactory.errorHandler);

// Server'ı başlat
if (require.main === module) {
  ServerFactory.startServer(app, PORT, 'API Module');
}

module.exports = app;
