require("dotenv").config(); // load .env
const { parse } = require("pg-connection-string");

const dbConfig = parse(process.env.DATABASE_URL);

const config = {
  projectConfig: {
    database_url: {
      host: dbConfig.host,
      port: dbConfig.port,
      user: dbConfig.user,
      password: dbConfig.password,
      database: dbConfig.database,
      ssl: { rejectUnauthorized: false }, // <--- crucial for Supabase
    },
    redis_url: process.env.REDIS_URL,
    jwt_secret: process.env.JWT_SECRET,
    cookie_secret: process.env.COOKIE_SECRET,
    store_cors: process.env.STORE_CORS,
    admin_cors: process.env.ADMIN_CORS,
    auth_cors: process.env.AUTH_CORS,
    serve: { admin: false }, // or true if you want admin server
  },
  plugins: [],
};

module.exports = config;
