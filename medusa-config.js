export default {
  projectConfig: {
    // ⚠️ ПОРТ ДЛЯ RENDER
    port: parseInt(process.env.PORT || 9000, 10),
    
    // ⚠️ SQLITE ДЛЯ ПРОСТОТЫ
    database_url: "sqlite:///medusa.db",
    database_type: "sqlite",
    
    // ⚠️ ВАЖНО: НОВАЯ СТРУКТУРА ДЛЯ MEDUSA 2.x
    http: {
      jwtSecret: process.env.JWT_SECRET,
      cookieSecret: process.env.COOKIE_SECRET,
      storeCors: process.env.STORE_CORS || "*",
      adminCors: process.env.ADMIN_CORS || "*",
    },
    
    // ⚠️ CORS НАСТРОЙКИ (дополнительно)
    store_cors: "*",
    admin_cors: "*",
    auth_cors: "*",
  },
  
  plugins: [],
  
  modules: {},
  
  featureFlags: {
    admin: false,
  }
};