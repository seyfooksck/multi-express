# 🚀 Multi-Express Template

Modüler yapıda, çoklu port sistemiyle çalışan Express.js projesi taslağı. Her modül bağımsız olarak çalışabilir ve kendi portunda hizmet verir.

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Proje Yapısı](#-proje-yapısı)
- [Kurulum](#-kurulum)
- [Kullanım](#-kullanım)
- [Modüller](#-modüller)
- [Geliştirme](#-geliştirme)
- [Özelleştirme](#-özelleştirme)

## ✨ Özellikler

- 🎯 **Modüler Yapı**: Her modül tamamen bağımsız ve ayrı çalışabilir
- 🎨 **Class-Based Controllers**: OOP prensipleriyle temiz ve yönetilebilir kod
- 🌐 **Multi-Port System**: Her servis farklı portta çalışır
- 📱 **EJS Template Engine**: Dinamik web sayfaları için
- 🚀 **RESTful API**: JSON tabanlı API modülü
- 🔄 **Base Controller**: Tüm controller'lar için ortak işlevler
- 📦 **ServerFactory**: Express app'leri kolayca oluşturma
- 🛣️ **RouterHelper**: Route tanımlamalarını kolaylaştırma
- 🎨 **Modern UI**: Gradient tasarımlar ve responsive yapı

## 📁 Proje Yapısı

```
multi-express/
├── core/                      # Ortak fonksiyonlar
│   ├── BaseController.js      # Temel controller sınıfı
│   ├── ServerFactory.js       # Express app factory
│   ├── RouterHelper.js        # Route yardımcıları
│   └── index.js              # Core export
│
├── modules/                   # Modüller
│   ├── home/                 # Ana sayfa modülü (Port 3000)
│   │   ├── controllers/
│   │   │   └── HomeController.js
│   │   ├── views/
│   │   │   ├── layout.ejs
│   │   │   └── home/
│   │   ├── routes.js
│   │   └── server.js
│   │
│   ├── user/                 # Kullanıcı modülü (Port 3001)
│   │   ├── controllers/
│   │   │   └── UserController.js
│   │   ├── views/
│   │   │   ├── layout.ejs
│   │   │   └── user/
│   │   ├── routes.js
│   │   └── server.js
│   │
│   ├── admin/                # Admin modülü (Port 3002)
│   │   ├── controllers/
│   │   │   └── AdminController.js
│   │   ├── views/
│   │   │   ├── layout.ejs
│   │   │   └── admin/
│   │   ├── routes.js
│   │   └── server.js
│   │
│   └── api/                  # API modülü (Port 3004)
│       ├── controllers/
│       │   └── ApiController.js
│       ├── views/
│       │   └── api/
│       ├── routes.js
│       └── server.js
│
├── .env                      # Ortam değişkenleri
├── .env.example             # Örnek ortam değişkenleri
├── .gitignore
├── index.js                 # Ana başlatma dosyası
├── package.json
└── README.md
```

## 🛠 Kurulum

### 1. Bağımlılıkları Yükleyin

```bash
npm install
```

### 2. Ortam Değişkenlerini Ayarlayın

`.env` dosyası zaten oluşturulmuştur. Gerekirse portları düzenleyebilirsiniz:

```env
HOME_PORT=3000
USER_PORT=3001
ADMIN_PORT=3002
API_PORT=3004
NODE_ENV=development
```

### 3. Sistemi Başlatın

```bash
npm start
```

## 🎮 Kullanım

### Tüm Modülleri Başlatma

```bash
npm start
```

Bu komut tüm modülleri aynı anda başlatır:
- 🏠 Home: http://localhost:3000
- 👤 User: http://localhost:3001
- 👑 Admin: http://localhost:3002
- 🚀 API: http://localhost:3004/docs

### Tek Modül Başlatma

İsterseniz modülleri ayrı ayrı da başlatabilirsiniz:

```bash
npm run home    # Sadece Home modülü
npm run user    # Sadece User modülü
npm run admin   # Sadece Admin modülü
npm run api     # Sadece API modülü
```

## 📦 Modüller

### 🏠 Home Module (Port 3000)

Ana sayfa modülü. Sistemin genel tanıtımı ve diğer modüllere linkler.

**Sayfalar:**
- `/` - Ana sayfa
- `/about` - Hakkında sayfası

**Controller:** `HomeController.js`

### 👤 User Module (Port 3001)

Kullanıcı yönetim modülü. Kullanıcı listesi, profil ve ayarlar.

**Sayfalar:**
- `/` - Kullanıcı listesi
- `/profile/:id` - Kullanıcı profili
- `/settings` - Kullanıcı ayarları

**Controller:** `UserController.js`

### 👑 Admin Module (Port 3002)

Yönetim paneli modülü. Dashboard, kullanıcı yönetimi, raporlar.

**Sayfalar:**
- `/` veya `/dashboard` - Admin dashboard
- `/users` - Kullanıcı yönetimi
- `/settings` - Sistem ayarları
- `/reports` - Raporlar ve analitik

**Controller:** `AdminController.js`

### 🚀 API Module (Port 3004)

RESTful API modülü. JSON tabanlı endpoint'ler.

**Endpoints:**

**Ürünler:**
- `GET /products` - Tüm ürünleri listele
- `GET /products/:id` - Tek ürün getir
- `POST /products` - Yeni ürün ekle
- `PUT /products/:id` - Ürün güncelle
- `DELETE /products/:id` - Ürün sil

**Kullanıcılar:**
- `GET /users` - Tüm kullanıcıları listele
- `GET /users/:id` - Tek kullanıcı getir

**Utility:**
- `GET /health` - API sağlık kontrolü
- `GET /docs` - API dökümantasyonu

**Controller:** `ApiController.js`

## 🔧 Geliştirme

### Yeni Modül Ekleme

1. `modules/` klasöründe yeni klasör oluşturun
2. Aşağıdaki yapıyı oluşturun:

```
modules/yeni-modul/
├── controllers/
│   └── YeniController.js
├── views/
│   ├── layout.ejs
│   └── yeni/
├── routes.js
└── server.js
```

3. Controller'ı BaseController'dan türetin:

```javascript
const { BaseController } = require('../../core');

class YeniController extends BaseController {
  async index(req, res) {
    this.render(res, 'yeni/index', {
      title: 'Yeni Modül'
    });
  }
}
```

4. Route'ları tanımlayın:

```javascript
const { RouterHelper } = require('../../core');
const YeniController = require('./controllers/YeniController');

const router = express.Router();
const controller = new YeniController();

const routes = [
  { method: 'get', path: '/', handler: 'index' }
];

RouterHelper.bindRoutes(router, controller, routes);
```

5. Server dosyasını oluşturun:

```javascript
const { ServerFactory } = require('../../core');
const routes = require('./routes');

const PORT = process.env.YENI_PORT || 3005;

const app = ServerFactory.createApp({
  viewEngine: true,
  viewsPath: path.join(__dirname, 'views')
});

app.use('/', routes);
app.use(ServerFactory.notFoundHandler);
app.use(ServerFactory.errorHandler);

if (require.main === module) {
  ServerFactory.startServer(app, PORT, 'Yeni Module');
}
```

6. `index.js` dosyasına modülü ekleyin
7. `package.json`'a npm script ekleyin

### BaseController Metodları

Tüm controller'larda kullanabileceğiniz hazır metodlar:

```javascript
// Success response
this.sendSuccess(res, data, message);

// Error response
this.sendError(res, message, statusCode);

// Render view
this.render(res, viewName, data);

// Log
this.log(message, type);

// Async handler wrapper
this.asyncHandler(asyncFunction);
```

### Middleware Ekleme

Route'lara middleware eklemek için:

```javascript
const authMiddleware = (req, res, next) => {
  // Auth logic
  next();
};

const routes = [
  { 
    method: 'get', 
    path: '/protected', 
    handler: 'protectedMethod',
    middleware: [authMiddleware]
  }
];
```

## 🎨 Özelleştirme

### Port Değiştirme

`.env` dosyasından portları değiştirebilirsiniz:

```env
HOME_PORT=4000
USER_PORT=4001
ADMIN_PORT=4002
API_PORT=4004
```

### Stil Değiştirme

Her modülün kendi `layout.ejs` dosyası vardır. Stilleri inline olarak değiştirebilir veya ayrı CSS dosyaları ekleyebilirsiniz.

### Database Ekleme

Bu template'te örnek veriler kullanılmaktadır. Database eklemek için:

1. MongoDB, PostgreSQL vb. bağlantısı ekleyin
2. Model'ler oluşturun
3. Controller'larda model'leri kullanın

```javascript
// Örnek
const User = require('../models/User');

async getUsers(req, res) {
  const users = await User.find();
  this.sendSuccess(res, users);
}
```

## 📝 Notlar

- ⚠️ Bu bir **template** projesidir, production'da authentication, validation, security middleware'leri eklemelisiniz
- 🔒 API endpoint'leri şu an public'tir, authentication eklenmelidir
- 💾 Veriler bellekte tutulmaktadır, database entegrasyonu yapılmalıdır
- 🎨 UI tasarımları temel seviyededir, geliştirilebilir
- 📦 Her modül tamamen bağımsızdır ve ayrı olarak deploy edilebilir

## 🤝 Katkıda Bulunma

Bu template'i geliştirmek için:

1. Yeni özellikler ekleyin
2. Daha fazla örnek controller/view ekleyin
3. Daha iyi error handling
4. Test coverage
5. Docker support

## 📄 Lisans

MIT

---

**Yaratıcı:** Multi-Express Template  
**Versiyon:** 1.0.0  
**Tarih:** 2025

🚀 Mutlu Kodlamalar!
