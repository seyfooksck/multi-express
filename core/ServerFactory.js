/**
 * Server Factory
 * Express server oluşturmak için yardımcı sınıf
 */
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

class ServerFactory {
  /**
   * Temel express app oluştur
   */
  static createApp(config = {}) {
    const app = express();
    
    // Body parser middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // View engine setup (EJS)
    if (config.viewEngine) {
      app.set('view engine', 'ejs');
      app.set('views', config.viewsPath || path.join(__dirname, '../views'));
      
      // Express-ejs-layouts middleware
      app.use(expressLayouts);
      app.set('layout', config.layout || 'layout');
      app.set('layout extractScripts', true);
      app.set('layout extractStyles', true);
    }

    // Static files
    if (config.staticPath) {
      app.use(express.static(config.staticPath));
    }

    // Custom middleware
    if (config.middleware && Array.isArray(config.middleware)) {
      config.middleware.forEach(mw => app.use(mw));
    }

    return app;
  }

  /**
   * Server'ı başlat
   */
  static startServer(app, port, moduleName) {
    return new Promise((resolve, reject) => {
      const server = app.listen(port, (err) => {
        if (err) {
          console.error(`❌ ${moduleName} başlatılamadı:`, err);
          reject(err);
        } else {
          console.log(`✅ ${moduleName} çalışıyor: http://localhost:${port}`);
          resolve(server);
        }
      });

      server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
          console.error(`❌ Port ${port} zaten kullanımda!`);
        }
        reject(err);
      });
    });
  }

  /**
   * 404 handler
   */
  static notFoundHandler(req, res) {
    res.status(404).json({
      success: false,
      message: 'Route bulunamadı',
      path: req.path
    });
  }

  /**
   * Error handler
   */
  static errorHandler(err, req, res, next) {
    console.error('Error:', err);
    res.status(err.status || 500).json({
      success: false,
      message: err.message || 'Sunucu hatası',
      error: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }
}

module.exports = ServerFactory;
