"use strict";

/**
 * TODO: Hace logout para que se borren los datos del usuario que está en sesión actual
 */
async function logout(req, res, next) {
    return res.status(200).send("Gracias por su visita");
}

module.exports = logout;