const config = (env = process.env.NODE_ENV || 'development') => {
  return {
    projectConfig: {
      database_url: process.env.DATABASE_URL,
      database_driver_options: {
        ssl: false,
      },
      redis_url: process.env.REDIS_URL,
      jwt_secret: process.env.JWT_SECRET,
      cookie_secret: process.env.COOKIE_SECRET,
      store_cors: process.env.STORE_CORS,
      admin_cors: process.env.ADMIN_CORS,
      serve: { admin: false },
      admin: {
        disable: true
      },
    },
    plugins: [],
  };
};

module.exports = config;
