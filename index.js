require('dotenv').config();
const { ServerFactory } = require('./core');

// Modülleri import et
const homeApp = require('./modules/home/server');
const userApp = require('./modules/user/server');
const adminApp = require('./modules/admin/server');
const apiApp = require('./modules/api/server');

// Port ayarları
const HOME_PORT = process.env.HOME_PORT || 3000;
const USER_PORT = process.env.USER_PORT || 3001;
const ADMIN_PORT = process.env.ADMIN_PORT || 3002;
const API_PORT = process.env.API_PORT || 3004;

console.log('\n🚀 Multi-Express Sistemi Başlatılıyor...\n');
console.log('═══════════════════════════════════════════════\n');

// Tüm servisleri başlat
Promise.all([
  ServerFactory.startServer(homeApp, HOME_PORT, 'Home Module'),
  ServerFactory.startServer(userApp, USER_PORT, 'User Module'),
  ServerFactory.startServer(adminApp, ADMIN_PORT, 'Admin Module'),
  ServerFactory.startServer(apiApp, API_PORT, 'API Module')
])
.then(() => {
  console.log('\n═══════════════════════════════════════════════');
  console.log('\n✨ Tüm modüller başarıyla başlatıldı!\n');
  console.log('📍 Modül Adresleri:');
  console.log(`   🏠 Home:  http://localhost:${HOME_PORT}`);
  console.log(`   👤 User:  http://localhost:${USER_PORT}`);
  console.log(`   👑 Admin: http://localhost:${ADMIN_PORT}`);
  console.log(`   🚀 API:   http://localhost:${API_PORT}/docs`);
  console.log('\n💡 İpucu: CTRL+C ile tüm servisleri durdurabilirsiniz.\n');
})
.catch((err) => {
  console.error('\n❌ Servisler başlatılırken hata oluştu:', err);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n\n👋 Servisler kapatılıyor...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n\n👋 Servisler kapatılıyor...');
  process.exit(0);
});
