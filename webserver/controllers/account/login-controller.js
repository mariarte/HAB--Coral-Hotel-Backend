"use strict";

const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const mysqlPool = require("../../../databases/mysql-pool");
const UserNotExistError = require("../errors/user-not-exist-error");

/**
 * TODO: Valida email y password (todos los campos son obligatorios):
 *  email: Valida email
 *  password: Letras (mayúsculas y minúsculas) y número.
 *            Mínimo 3 y max 30 caracteres, usando regular expression: /^[a-zA-Z0-9]{3,30}$/
 *  Se usa el paquete Joi para validar: https://www.npmjs.com/package/joi
 *  @param {Object} payload Objeto a validar
 *  @return {Object} Nulo si los datos son válidos. Sino no son válidos arroja un error
 */
async function validateData(payload) {
    const schema = {
        email: Joi.string()
            .email({ minDomainAtoms: 2 })
            .required(),
        password: Joi.string()
            .regex(/^[a-zA-Z0-9]{3,30}$/)
            .required()
    };
    return Joi.validate(payload, schema);
}

/**
 * TODO: Función que permite hacer login de usario, comprobando el JWT token
 * Sino hay errores, http 200 y 401 o 404 en otros casos
 */
async function checkLogin(req, res, next) {
    const accountData = {...req.body };

    try {
        await validateData(accountData);
    } catch (e) {
        console.error("Error: User / Password deben cumplir un patron...");
        return res.status(400).send(e);
    }

    try {
        const connection = await mysqlPool.getConnection();
        const consultaDB = `SELECT idUser, fullName, email, password, createdAt FROM users WHERE email = '${
      accountData.email
    }'`;
        const [resultado] = await connection.query(consultaDB);
        connection.release();

        if (resultado.length === 1) {
            const fichaUser = resultado[0];

            const passwordCoincide = await bcrypt.compare(
                accountData.password,
                fichaUser.password
            );
            if (!passwordCoincide) {
                console.error("Error: Password no coincide con DB");
                return res.status(401).send();
            }

            const token = {
                idUser: fichaUser.idUser
            };

            const resultToken = jwt.sign(token, process.env.JWT_PASSWORD, {
                expiresIn: Math.floor(Date.now() / 1000) + 60 * 60
            });

            return res.status(200).json({ resultToken });
        }

        console.error("Error: El usuario no se encuentra en DB");
        const userNotExist = new UserNotExistError(
            "El usuario no existe en la DB. Prueba de nuevo..."
        );
        return res.status(404).send([userNotExist]);
    } catch (e) {
        console.error("Error: User / Password no coinciden...");
        return res.status(401).send(e.message);
    }
}

module.exports = checkLogin;