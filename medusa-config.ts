const config = {
  projectConfig: {
    database_url: process.env.DATABASE_URL,
    redis_url: process.env.REDIS_URL,
    jwtSecret: process.env.JWT_SECRET,
    cookieSecret: process.env.COOKIE_SECRET,
    storeCors: process.env.STORE_CORS,
    adminCors: process.env.ADMIN_CORS,
    authCors: process.env.AUTH_CORS,
    serve: {
      admin: false,
    },
  },
  plugins: [],
}

export default config