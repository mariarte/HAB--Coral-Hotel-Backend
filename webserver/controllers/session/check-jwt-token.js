"use strict";

const jwt = require("jsonwebtoken");

const { JWT_PASSWORD: authJwtSecret } = process.env;

/**
 * TODO: Comprueba que el JWT-Token sea correcto:
 * 1. Comprueba si existe el token
 * 2. Comprueba si es válido (JWT______)
 * 3. Pasa la información a la siguiente función
 */
async function checkJwtToken(req, res, next) {
    const { authorization } = req.headers;

    /**
     * 1. Comprueba si el token existe en DB
     * 2. Comprueba si es válido: Tiene que empezar por el prefijo JWT
     */
    if (!authorization) {
        console.error("El token no existe");
        return res.status(401).send();
    }

    const [prefix, token] = authorization.split(" "); // [JWT, xxxx]
    if (prefix !== "JWT") {
        console.error("El prefijo del token debe ser: JWT");
        return res.status(401).send();
    }

    if (!token) {
        console.error("Token diferente");
        return res.status(401).send();
    }

    try {
        const decoded = jwt.verify(token, authJwtSecret);

        if (!decoded) {
            console.error("Token inválido");
            return res.status(401).send();
        }

        /**
         * 3. Se crea una propiedad claims personalizada
         * y se pasa la info a la siguiente función, para que pueda
         * utilizarlo para obtener datos de DB
         */
        req.claims = {
            idUser: decoded.idUser
        };

        return next();
    } catch (e) {
        console.error("ERROR");
        return res.status(401).send(e.message);
    }
}

module.exports = checkJwtToken;