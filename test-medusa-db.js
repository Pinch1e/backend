require("dotenv").config();
const { Client } = require("pg");

console.log("🔍 Using DATABASE_URL:", process.env.DATABASE_URL);
console.log("🔍 Type:", typeof process.env.DATABASE_URL);

(async () => {
  try {
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: false, // force plain TCP
    });
    await client.connect();
    const res = await client.query("SELECT current_database(), current_user;");
    console.log("✅ Connected as:", res.rows[0]);
    await client.end();
  } catch (err) {
    console.error("❌ Connection error:", err);
  }
})();
