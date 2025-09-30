require("dotenv").config(); // load .env

const config = {
  projectConfig: {
    database_url: process.env.DATABASE_URL,
    redis_url: process.env.REDIS_URL,
    jwt_secret: process.env.JWT_SECRET,
    cookie_secret: process.env.COOKIE_SECRET,
    store_cors: process.env.STORE_CORS,
    admin_cors: process.env.ADMIN_CORS,
    auth_cors: process.env.AUTH_CORS,
    database_driver_options: {
      ssl: { rejectUnauthorized: false },
    },
    serve: {
      admin: false, // or true if you want the admin server to run
    },
  },
  plugins: [],
};

module.exports = config;
