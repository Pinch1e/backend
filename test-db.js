const { Client } = require("pg");
require("dotenv").config();
const { parse } = require("pg-connection-string");

const config = parse(process.env.DATABASE_URL);

const client = new Client({
  host: config.host,
  port: config.port,
  user: config.user,
  password: config.password,
  database: config.database,
  ssl: { rejectUnauthorized: false }, // <--- this fixes self-signed cert
});

client.connect()
  .then(() => {
    console.log("✅ Database connection successful!");
    return client.end();
  })
  .catch((err) => {
    console.error("❌ Database connection failed:");
    console.error(err);
  });
