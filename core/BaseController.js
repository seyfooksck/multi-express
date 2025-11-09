/**
 * Base Controller Class
 * Tüm controller'lar bu sınıftan türetilir
 */
class BaseController {
  constructor() {
    this.name = this.constructor.name;
  }

  /**
   * Success response helper
   */
  sendSuccess(res, data, message = 'Success') {
    return res.status(200).json({
      success: true,
      message,
      data
    });
  }

  /**
   * Error response helper
   */
  sendError(res, message = 'Error', statusCode = 500) {
    return res.status(statusCode).json({
      success: false,
      message,
      error: true
    });
  }

  /**
   * Render view helper
   */
  render(res, view, data = {}) {
    return res.render(view, {
      ...data,
      timestamp: new Date().toISOString()
    });
  }

  /**
   * Async handler wrapper
   */
  asyncHandler(fn) {
    return (req, res, next) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  }

  /**
   * Log helper
   */
  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${this.name}] [${type.toUpperCase()}] ${message}`);
  }
}

module.exports = BaseController;
