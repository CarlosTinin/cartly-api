const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    development: {
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        dialect: "mysql",
        migrationsStorageTableName: "migrations",
        define: {
            timestamps: true,
            underscored: true,
            underscoredAll: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    },
    test: {
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        dialect: "mysql",
        migrationsStorageTableName: "migrations",
        define: {
            timestamps: true,
            underscored: true,
            underscoredAll: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    },
    production: {
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        dialect: "mysql",
        migrationsStorageTableName: "migrations",
        define: {
            timestamps: true,
            underscored: true,
            underscoredAll: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
}