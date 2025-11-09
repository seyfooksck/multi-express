const { BaseController } = require('../../../core');

class ApiController extends BaseController {
  constructor() {
    super();
    // Örnek data
    this.products = [
      { id: 1, name: 'Laptop', price: 25000, category: 'Elektronik', stock: 15 },
      { id: 2, name: 'Mouse', price: 250, category: 'Aksesuar', stock: 50 },
      { id: 3, name: 'Klavye', price: 800, category: 'Aksesuar', stock: 30 },
      { id: 4, name: 'Monitor', price: 8500, category: 'Elektronik', stock: 12 }
    ];
    
    this.users = [
      { id: 1, name: 'Ahmet Yılmaz', email: 'ahmet@example.com', role: 'admin' },
      { id: 2, name: 'Ayşe Kaya', email: 'ayse@example.com', role: 'user' },
      { id: 3, name: 'Mehmet Demir', email: 'mehmet@example.com', role: 'user' }
    ];
  }

  /**
   * API Dökümantasyon sayfası
   */
  async docs(req, res) {
    this.log('API Dökümantasyonu görüntülendi');
    
    this.render(res, 'api/docs', {
      title: 'API Dökümantasyonu',
      baseUrl: `http://localhost:${process.env.API_PORT || 3004}`
    });
  }

  /**
   * API Health Check
   */
  async health(req, res) {
    this.sendSuccess(res, {
      status: 'healthy',
      uptime: process.uptime(),
      timestamp: new Date().toISOString()
    }, 'API çalışıyor');
  }

  /**
   * Tüm ürünleri listele
   */
  async getProducts(req, res) {
    this.log('Ürünler listelendi');
    this.sendSuccess(res, this.products, 'Ürünler başarıyla getirildi');
  }

  /**
   * Tek ürün getir
   */
  async getProduct(req, res) {
    const id = parseInt(req.params.id);
    const product = this.products.find(p => p.id === id);
    
    if (!product) {
      return this.sendError(res, 'Ürün bulunamadı', 404);
    }
    
    this.log(`Ürün getirildi: ${product.name}`);
    this.sendSuccess(res, product, 'Ürün başarıyla getirildi');
  }

  /**
   * Yeni ürün ekle
   */
  async createProduct(req, res) {
    const { name, price, category, stock } = req.body;
    
    if (!name || !price || !category) {
      return this.sendError(res, 'Eksik bilgi: name, price ve category gerekli', 400);
    }
    
    const newProduct = {
      id: this.products.length + 1,
      name,
      price: parseFloat(price),
      category,
      stock: parseInt(stock) || 0
    };
    
    this.products.push(newProduct);
    this.log(`Yeni ürün eklendi: ${newProduct.name}`);
    
    this.sendSuccess(res, newProduct, 'Ürün başarıyla eklendi');
  }

  /**
   * Ürün güncelle
   */
  async updateProduct(req, res) {
    const id = parseInt(req.params.id);
    const productIndex = this.products.findIndex(p => p.id === id);
    
    if (productIndex === -1) {
      return this.sendError(res, 'Ürün bulunamadı', 404);
    }
    
    const { name, price, category, stock } = req.body;
    
    if (name) this.products[productIndex].name = name;
    if (price) this.products[productIndex].price = parseFloat(price);
    if (category) this.products[productIndex].category = category;
    if (stock !== undefined) this.products[productIndex].stock = parseInt(stock);
    
    this.log(`Ürün güncellendi: ${this.products[productIndex].name}`);
    this.sendSuccess(res, this.products[productIndex], 'Ürün başarıyla güncellendi');
  }

  /**
   * Ürün sil
   */
  async deleteProduct(req, res) {
    const id = parseInt(req.params.id);
    const productIndex = this.products.findIndex(p => p.id === id);
    
    if (productIndex === -1) {
      return this.sendError(res, 'Ürün bulunamadı', 404);
    }
    
    const deletedProduct = this.products.splice(productIndex, 1)[0];
    this.log(`Ürün silindi: ${deletedProduct.name}`);
    
    this.sendSuccess(res, deletedProduct, 'Ürün başarıyla silindi');
  }

  /**
   * Tüm kullanıcıları listele
   */
  async getUsers(req, res) {
    this.log('Kullanıcılar listelendi');
    this.sendSuccess(res, this.users, 'Kullanıcılar başarıyla getirildi');
  }

  /**
   * Tek kullanıcı getir
   */
  async getUser(req, res) {
    const id = parseInt(req.params.id);
    const user = this.users.find(u => u.id === id);
    
    if (!user) {
      return this.sendError(res, 'Kullanıcı bulunamadı', 404);
    }
    
    this.log(`Kullanıcı getirildi: ${user.name}`);
    this.sendSuccess(res, user, 'Kullanıcı başarıyla getirildi');
  }
}

module.exports = ApiController;
