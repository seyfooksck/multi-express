/**
 * Router Helper
 * Controller metodlarını route'lara bağlamak için yardımcı
 */
class RouterHelper {
  /**
   * Controller metodlarını express router'a bağla
   */
  static bindRoutes(router, controller, routes) {
    routes.forEach(route => {
      const { method, path, handler, middleware = [] } = route;
      
      // Controller metodunu bind et
      const boundHandler = controller[handler].bind(controller);
      
      // Async handler wrap et
      const wrappedHandler = controller.asyncHandler 
        ? controller.asyncHandler(boundHandler)
        : boundHandler;

      // Route'u tanımla
      router[method](path, ...middleware, wrappedHandler);
    });

    return router;
  }

  /**
   * Middleware zincirleme helper
   */
  static chain(...middlewares) {
    return middlewares.flat();
  }
}

module.exports = RouterHelper;
