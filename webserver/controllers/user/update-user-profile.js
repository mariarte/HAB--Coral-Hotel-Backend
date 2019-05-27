"use strict";

const Joi = require("joi");

const mysqlPool = require("../../../databases/mysql-pool");

/**
 * TODO: Valida full-name (campo obligatorio), que es el único campo
 * que se permite modificar:
 *  fullName: String
 *  Se usa el paquete Joi para validar: https://www.npmjs.com/package/joi
 */
async function validate(payload) {
    const schema = {
        fullName: Joi.string()
            .min(3)
            .max(128)
            .required()
    };
    return Joi.validate(payload, schema);
}

/**
 * TODO: Se modifica la cuenta de usario, para ello:
 * 1. Valida los datos que se introducen (fullName)
 * 2. Hace el update en DB
 */
async function updateUserProfile(req, res, next) {
    const userDataProfile = {...req.body };
    const { idUser } = req.claims;

    /**
     * 1. Valida los datos, usando la función creada para ello
     */
    try {
        await validate(userDataProfile);
    } catch (e) {
        return res.status(400).send(e.message);
    }

    /**
     * 2. Hace la modificación en DB:
     *         1. Conecta con la DB
     *         2. Se modifican los datos introducidos
     */
    const { fullName } = userDataProfile;

    try {
        const connection = await mysqlPool.getConnection();

        await connection.query(`UPDATE users 
            SET fullname = '${fullName}'
            WHERE idUser = '${idUser}';`);
        connection.release();

        console.log("PERFIL MODIFICADO");

        return res.status(204).send("Enviado a DB");
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

module.exports = updateUserProfile;