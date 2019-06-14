"use strict";

const mysqlPool = require("../../../databases/mysql-pool");

/**
 * TODO: Función que permite borrar la cuenta de usuario.
 * Si no hay errores, http 204 y 500 en otro caso
 */
async function deleteUserProfile(req, res, next) {
    const userDataProfile = {...req.body };
    const { idUser } = req.claims;

    try {
        const connection = await mysqlPool.getConnection();

        await connection.query(`DELETE FROM users WHERE idUser = '${idUser}';`);
        connection.release();

        console.log("PERFIL BORRADO");

        return res.status(204).send("Borrado de la DB");
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

module.exports = deleteUserProfile;