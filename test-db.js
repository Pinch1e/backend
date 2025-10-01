const { Client } = require("pg");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const caPath = path.join(__dirname, "certs", "prod-ca-2021.crt");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync(caPath).toString(),
  },
});

client.connect()
  .then(() => {
    console.log("✅ Database connection successful!");
    client.end();
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
  });
