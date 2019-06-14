"use strict";

const Joi = require("joi");

const mysqlPool = require("../../../databases/mysql-pool");

/**
 * TODO: Valida full-name (campo obligatorio), que es el único campo
 * que se permite modificar:
 *  fullName: String
 *  Se usa el paquete Joi para validar: https://www.npmjs.com/package/joi
 * @param {Object} payload Objeto a validar
 * @return {Object} Nulo si los datos son válidos. Sino no son válidos arroja un error
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
 * TODO: Función que permite modificar la cuenta de usuario.
 * Si no hay errores, http 204 y 500 en otro caso
 */
async function updateUserProfile(req, res, next) {
    const userDataProfile = {...req.body };
    const { idUser } = req.claims;

    try {
        await validate(userDataProfile);
    } catch (e) {
        return res.status(400).send(e.message);
    }

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