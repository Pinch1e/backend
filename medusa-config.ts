const config = (env = process.env.NODE_ENV || 'development') => {
  if (env === 'development' || env === 'test') {
    return {
      projectConfig: {
        database_config: {
          host: '13.60.79.215',
          port: 5555,
          database: 'kristen',
          user: 'medusauser',
          password: 'REMOVED_SECRET',
        },
        database_driver_options: {
          ssl: false,
        },
        redis_url: process.env.REDIS_URL,
        jwt_secret: process.env.JWT_SECRET,
        cookie_secret: process.env.COOKIE_SECRET,
        store_cors: process.env.STORE_CORS,
        admin_cors: process.env.ADMIN_CORS,
        serve: { admin: false },
      },
      plugins: [],
    };
  } else {
    return {
      projectConfig: {
        database_url: process.env.DATABASE_URL,
        database_driver_options: {
          ssl: { rejectUnauthorized: false },
        },
        redis_url: process.env.REDIS_URL,
        jwt_secret: process.env.JWT_SECRET,
        cookie_secret: process.env.COOKIE_SECRET,
        store_cors: process.env.STORE_CORS,
        admin_cors: process.env.ADMIN_CORS,
        serve: { admin: false },
      },
      plugins: [],
    };
  }
};

module.exports = config;
