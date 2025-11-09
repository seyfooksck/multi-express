const { BaseController } = require('../../../core');

class HomeController extends BaseController {
  constructor() {
    super();
  }

  /**
   * Ana sayfa
   */
  async index(req, res) {
    this.log('Ana sayfa görüntülendi');
    
    this.render(res, 'home/index', {
      title: 'Ana Sayfa',
      message: 'Multi-Express Sistemine Hoş Geldiniz!',
      ports: {
        home: process.env.HOME_PORT || 3000,
        user: process.env.USER_PORT || 3001,
        admin: process.env.ADMIN_PORT || 3002,
        api: process.env.API_PORT || 3004
      }
    });
  }

  /**
   * Hakkında sayfası
   */
  async about(req, res) {
    this.log('Hakkında sayfası görüntülendi');
    
    this.render(res, 'home/about', {
      title: 'Hakkında',
      info: {
        name: 'Multi-Express Template',
        version: '1.0.0',
        description: 'Modüler Express.js çoklu port sistemi'
      }
    });
  }
}

module.exports = HomeController;
