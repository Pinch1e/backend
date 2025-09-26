import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS || "https://your-storefront-domain.com,http://localhost:3000",
      adminCors: process.env.ADMIN_CORS || "https://admin-self-gamma.vercel.app,http://localhost:7001",
      authCors: process.env.AUTH_CORS || "https://admin-self-gamma.vercel.app,http://localhost:7001",
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  }
})
