require('dotenv').config();

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: false
});

client.connect()
  .then(() => {
    console.log('Database connected successfully');
    return client.end();
  })
  .catch(err => {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  });
