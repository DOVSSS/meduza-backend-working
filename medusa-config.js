export default {
  projectConfig: {
    
    port: parseInt(process.env.PORT || 9000, 10),
    
    
    database_url: "sqlite:///medusa.db",
    database_type: "sqlite",
    
    
    http: {
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
    
    
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