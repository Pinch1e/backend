require("dotenv").config();
const { Client } = require("pg");

const config = {
  projectConfig: {
    database_url: process.env.DATABASE_URL,
    redis_url: process.env.REDIS_URL,
    jwt_secret: process.env.JWT_SECRET,
    cookie_secret: process.env.COOKIE_SECRET,
    store_cors: process.env.STORE_CORS,
    admin_cors: process.env.ADMIN_CORS,
    database_driver_options: {
      ssl: false,
    },
    serve: { admin: false },
  },
  plugins: [],
};

console.log("🔍 Using DATABASE_URL:", config.projectConfig.database_url);
console.log("🔍 Using password from options:", config.projectConfig.database_driver_options.password);

(async () => {
  try {
    const client = new Client({
      connectionString: config.projectConfig.database_url,
      ...config.projectConfig.database_driver_options,
    });
    await client.connect();
    const res = await client.query("SELECT current_database(), current_user;");
    console.log("✅ Connected as:", res.rows[0]);
    await client.end();
  } catch (err) {
    console.error("❌ Connection error:", err.message);
    console.error("Full error:", err);
  }
})();
