module.exports = {
  projectConfig: {
    port: 9000,
    database_url: "sqlite:///medusa.db",
    database_type: "sqlite",
    jwt_secret: "test123",
    cookie_secret: "test123",
    store_cors: "*",
    admin_cors: "*",
  },
  plugins: [],
};