"use strict";

/**
 * TODO: Funcion que permite hacer logout al usuario.
 * Envía http 200
 */
async function logout(req, res, next) {
    return res.status(200).send("Gracias por su visita");
}

module.exports = logout;