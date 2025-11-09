const { BaseController } = require('../../../core');

class AdminController extends BaseController {
  constructor() {
    super();
    // Örnek dashboard data
    this.stats = {
      totalUsers: 1543,
      activeUsers: 892,
      totalRevenue: 125670,
      pendingOrders: 23
    };
    
    this.recentActivities = [
      { id: 1, action: 'Yeni kullanıcı kaydı', user: 'Ali Veli', time: '5 dakika önce' },
      { id: 2, action: 'Sipariş tamamlandı', user: 'Fatma Yıldız', time: '12 dakika önce' },
      { id: 3, action: 'Ürün güncellendi', user: 'Admin', time: '1 saat önce' },
      { id: 4, action: 'Yorum onaylandı', user: 'Moderator', time: '2 saat önce' }
    ];
  }

  /**
   * Admin Dashboard
   */
  async dashboard(req, res) {
    this.log('Admin dashboard görüntülendi');
    
    this.render(res, 'admin/dashboard', {
      title: 'Admin Dashboard',
      stats: this.stats,
      activities: this.recentActivities
    });
  }

  /**
   * Kullanıcı yönetimi
   */
  async users(req, res) {
    this.log('Kullanıcı yönetim sayfası görüntülendi');
    
    this.render(res, 'admin/users', {
      title: 'Kullanıcı Yönetimi'
    });
  }

  /**
   * Sistem ayarları
   */
  async settings(req, res) {
    this.log('Sistem ayarları görüntülendi');
    
    this.render(res, 'admin/settings', {
      title: 'Sistem Ayarları'
    });
  }

  /**
   * Raporlar
   */
  async reports(req, res) {
    this.log('Raporlar sayfası görüntülendi');
    
    this.render(res, 'admin/reports', {
      title: 'Raporlar ve Analitik'
    });
  }
}

module.exports = AdminController;
