"use strict";

async function logout(req, res, next) {
    return res.status(200).send("Gracias por su visita");
}

module.exports = logout;