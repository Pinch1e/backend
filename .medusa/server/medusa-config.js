"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            password: 'REMOVED_SECRET',
        },
        serve: { admin: false },
    },
    plugins: [],
};
module.exports = config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkdXNhLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21lZHVzYS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLE1BQU0sR0FBRztJQUNiLGFBQWEsRUFBRTtRQUNiLFlBQVksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVk7UUFDdEMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUztRQUNoQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVO1FBQ2xDLGFBQWEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWE7UUFDeEMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVTtRQUNsQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVO1FBQ2xDLHVCQUF1QixFQUFFO1lBQ3ZCLEdBQUcsRUFBRSxLQUFLO1lBQ1YsUUFBUSxFQUFFLFlBQVk7U0FDdkI7UUFDRCxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0tBQ3hCO0lBQ0QsT0FBTyxFQUFFLEVBQUU7Q0FDWixDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMifQ==