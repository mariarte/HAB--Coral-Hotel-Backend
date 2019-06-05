"use strict";

const mysql = require("mysql2");
const fs = require("fs");

const sslCertificate = process.env.MYSQL_SSL_CERTIFICATE;

async function connect() {
    const sslCertificateData = sslCertificate ?
        fs.readFileSync(sslCertificate) :
        null;
    const sslOptions = {
        ssl: {
            ca: sslCertificateData
        }
    };

    const options = {
        connectionLimit: 10,
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        port: process.env.MYSQL_PORT,
        // timezone: "Z",
        // debug: true,
        multipleStatements: true,
        ...(sslCertificateData && sslOptions)
    };

    console.log("HOST: ", process.env.MYSQL_HOST);
    console.log("USER: ", process.env.MYSQL_USER);
    // console.log("PASSWORD: ", process.env.MYSQL_PASSWORD);
    console.log("DATABASE: ", process.env.MYSQL_DATABASE);
    console.log("PORT: ", process.env.MYSQL_PORT);
    /**
     * Crear connection pool y promisifico para usar async / await
     */
    const pool = mysql.createPool(options);
    this.pool = pool.promise();

    try {
        const connection = await this.pool.getConnection();
        if (connection) {
            connection.release(); // Reconexion
        }
    } catch (e) {
        console.error("mysql pool connect", e);
        throw e;
    }
}

async function getConnection() {
    if (this.pool === null) {
        throw new Error(
            "MySQL connection didn't established. You must connect first."
        );
    }

    const connection = await this.pool.getConnection();

    return connection;
}

module.exports = {
    connect,
    getConnection
};