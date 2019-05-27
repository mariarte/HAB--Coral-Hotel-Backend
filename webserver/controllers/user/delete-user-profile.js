"use strict";

const mysqlPool = require("../../../databases/mysql-pool");

/**
 * TODO: Borra la cuenta de usuario, para ello:
 * 1. Conecta a la DB
 * 2. Consulta los datos de la DB y hace delete
 * 3. Envía mensaje de confirmación
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