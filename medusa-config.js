export default {
  projectConfig: {
    port: parseInt(process.env.PORT || 9000, 10),
    
    // Для PostgreSQL на Render
    database_type: "postgres",
    database_url: process.env.DATABASE_URL || "postgresql://localhost/medusa",
    
    http: {
      jwtSecret: process.env.JWT_SECRET,
      cookieSecret: process.env.COOKIE_SECRET,
    },
    
    store_cors: process.env.STORE_CORS || "*",
    admin_cors: process.env.ADMIN_CORS || "*",
  },
  
  plugins: [],
  
  modules: {},
  
  featureFlags: {
    admin: false,
  }
};