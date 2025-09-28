import { MedusaConfig } from "@medusajs/medusa"

const config: MedusaConfig = {
  projectConfig: {
    // Database (Postgres)
    database_url: process.env.DATABASE_URL,

    // Redis (if you have it configured in Railway or Upstash)
    redis_url: process.env.REDIS_URL,

    // Secrets
    jwtSecret: process.env.JWT_SECRET,
    cookieSecret: process.env.COOKIE_SECRET,

    // CORS
    storeCors: process.env.STORE_CORS || "http://localhost:3000",
    adminCors: process.env.ADMIN_CORS || "http://localhost:7001",
    authCors: process.env.AUTH_CORS || "http://localhost:7001",

    // Don’t try to serve the Admin UI (since it’s on Vercel)
    serve: {
      admin: false,
    },
  },

  plugins: [
    // You can add plugins here later, e.g. payment providers, search, etc.
    // Example: "medusa-payment-stripe"
  ],
}

export default config
