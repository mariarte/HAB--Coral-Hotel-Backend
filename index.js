"use strict";

require("dotenv").config(); // Importando DOTENV: para usar variables de entorno
const bodyParser = require("body-parser"); // Importando libreria BODY-PARSER: para gestionar los datos que nos vienen por body
const express = require("express");
const routers = require("./webserver/routes");
const mysqlPool = require("./databases/mysql-pool");
const app = express();

process.on("uncaughtException", err => {
    console.error("Excepción inesperada", err.message, err);
});

process.on("unhandledRejection", err => {
    console.error("Error inesperado", err.message, err);
});

app.use((req, res, next) => {
    const accessControlAllowMethods = [
        "GET",
        "POST",
        "DELETE",
        "HEAD",
        "PATCH",
        "PUT",
        "OPTIONS"
    ];

    const accessControlAllowHeaders = [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "Accept-Version",
        "Authorization",
        "Location"
    ];

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Methods",
        accessControlAllowMethods.join(",")
    );
    res.header(
        "Access-Control-Allow-Headers",
        accessControlAllowHeaders.join(",")
    );
    res.header(
        "Access-Control-Expose-Headers",
        accessControlAllowHeaders.join(",")
    );
    next();
});

app.use(bodyParser.json());

// Gestiono el error: si no le paso un JSON correcto
app.use((err, req, res, next) => {
    console.log(err);
    res.status(400).send({
        error: `Body Parser: ${err.message}`
    });
});

app.use("/api", routers.accountRouter);
app.use("/api", routers.experienceRouter);
app.use("/api", routers.userRouter);
app.use("/api", routers.orderRouter);

/**
 * TODO:Gestión de errores customizada:
 * 1. Si el usuario no existe en la DB (se usa para el login)
 * 2. Si el email ya existe en DB (se usa para crear cuenta)
 */
app.use((err, req, res, next) => {
    const { name: errorName } = err;

    if (errorName === "UserNotExistError") {
        return res.status(403).send({
            message: err.message
        });
    }

    if (errorName === "EmailAlreadyExistError") {
        return res.status(403).send({
            message: err.message
        });
    }

    return res.status(500).send({
        error: err.message
    });
});

async function init() {
    try {
        await mysqlPool.connect();
    } catch (e) {
        console.error(e);
        process.exit(1); // Para salir del proceso de error y le mandamos en codigo unix el 1
    }

    const port = process.env.PORT;
    app.listen(port, () => {
        // Escuchando el puerto
        console.log(`Server running and listening on port ${port}`);
    });
}

init(); // Autollamada de la función init