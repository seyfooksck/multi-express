const { BaseController } = require('../../../core');

class UserController extends BaseController {
  constructor() {
    super();
    // Örnek user data
    this.users = [
      { id: 1, name: 'Ahmet Yılmaz', email: 'ahmet@example.com', role: 'user' },
      { id: 2, name: 'Ayşe Kaya', email: 'ayse@example.com', role: 'user' },
      { id: 3, name: 'Mehmet Demir', email: 'mehmet@example.com', role: 'user' }
    ];
  }

  /**
   * Kullanıcı listesi sayfası
   */
  async index(req, res) {
    this.log('Kullanıcı listesi görüntülendi');
    
    this.render(res, 'user/index', {
      title: 'Kullanıcı Paneli',
      users: this.users
    });
  }

  /**
   * Kullanıcı profili
   */
  async profile(req, res) {
    const userId = parseInt(req.params.id);
    const user = this.users.find(u => u.id === userId);
    
    if (!user) {
      return this.render(res, 'user/404', {
        title: 'Kullanıcı Bulunamadı'
      });
    }

    this.log(`Kullanıcı profili görüntülendi: ${user.name}`);
    
    this.render(res, 'user/profile', {
      title: `Profil - ${user.name}`,
      user
    });
  }

  /**
   * Kullanıcı ayarları
   */
  async settings(req, res) {
    this.log('Ayarlar sayfası görüntülendi');
    
    this.render(res, 'user/settings', {
      title: 'Kullanıcı Ayarları'
    });
  }
}

module.exports = UserController;
