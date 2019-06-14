"use strict";

const bcrypt = require("bcrypt"); // Importando libreria BCRYPT: para hashear password
const Joi = require("joi"); // Importando libreria JOI: para validar datos (email, password)
const mysqlPool = require("../../../databases/mysql-pool"); // Llamada al archivo mysql-pool.js
const sendgridMail = require("@sendgrid/mail"); // Importando libreria SENDGRID: para enviar email de crear cuenta
const EmailAlreadyExistError = require("../errors/email-already-exist-error");

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * TODO: Valida email, password y full-name (todos los campos son obligatorios):
 *  email: Valida email
 *  password: Letras (mayúsculas y minúsculas) y número.
 *            Mínimo 3 y max 30 caracteres, usando regular expression: /^[a-zA-Z0-9]{3,30}$/
 *  fullName: String
 *  Se usa el paquete Joi para validar: https://www.npmjs.com/package/joi
 * @param {Object} payload Objeto a validar
 * @return {Object} Nulo si los datos son válidos. Sino no son válidos arroja un error
 */
async function validateSchema(payload) {
    const schema = {
        fullName: Joi.string(),
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
 * TODO: Envia un email de información al usuario, que la cuenta
 * ha sido creada correctamente:
 * @param {String} userEmail
 */
async function sendEmailRegistration(userEmail) {
    const msg = {
        to: userEmail,
        from: {
            email: "coralhotel@yopmail.com",
            name: "Coral Hotel :)"
        },
        subject: "Bienvenido a Coral Hotel",
        text: "Empieza a disfrutar de la experiencia Coral",
        html: `La cuenta ha sido creada correctamente. Ya puede disfrutar de las ventajas de Coral Hotel`
    };
    const data = await sendgridMail.send(msg);
    return data;
}

/**
 * TODO: Función que permite crear la cuenta de usuario.
 * Enviando un email de confirmación al usuario.
 * Si no hay errores, http 204 y 500 en otro caso
 */
async function createAccount(req, res, next) {
    const accountData = req.body;

    try {
        await validateSchema(accountData);
    } catch (e) {
        return res.status(400).send(e.message);
    }

    const now = new Date();
    const securePassword = await bcrypt.hash(accountData.password, 10);
    const createdAt = now
        .toISOString()
        .substring(0, 19)
        .replace("T", " ");

    const connection = await mysqlPool.getConnection();

    const consultaDB = `SELECT idUser,fullName, email, password, createdAt FROM users WHERE email = '${
    accountData.email
  }'`;
    const sqlInsercion = "INSERT INTO users SET ?";

    try {
        const resultado = await connection.query(sqlInsercion, {
            idUser: accountData.idUser,
            fullName: accountData.fullName,
            email: accountData.email,
            password: securePassword,
            createdAt: createdAt
        });
        connection.release();
        await sendEmailRegistration(accountData.email);

        console.log("CUENTA CREADA");
        return res.status(201).send();
    } catch (e) {
        if (connection) {
            connection.release();
        }

        if (e.code === "ER_DUP_ENTRY") {
            const userDuplicate = new EmailAlreadyExistError(
                "Email duplicado: Ya existe en DB"
            );
            return res.status(409).send([userDuplicate]);
        }

        console.error(e);
        return res.status(500).send(e.message);
    }
}
module.exports = createAccount;