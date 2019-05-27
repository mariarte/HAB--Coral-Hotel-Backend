"use strict";

const mysqlPool = require("../../../databases/mysql-pool");

/**
 * TODO: Busca la cuenta de usuario para enviar la petición:
 * 1. Conecta a la DB
 * 2. Consulta los datos de la DB
 * 3. Envía los datos al usuario
 */
async function getUserProfile(req, res, next) {
    const { idUser } = req.claims;

    try {
        const connection = await mysqlPool.getConnection();
        const consultaDB = `SELECT idUser,fullName, email, password, createdAt FROM users WHERE idUser = '${idUser}'`;
        const [resultado] = await connection.query(consultaDB);
        connection.release();

        const [data] = resultado;

        const userDataProfile = {
            idUser: data.idUser,
            fullName: data.fullName,
            email: data.email,
            password: data.password,
            createdAt: data.createdAt
        };

        return res.status(200).send(userDataProfile);
    } catch (e) {
        return res.status(404).send(e.message);
    }
}

module.exports = getUserProfile;