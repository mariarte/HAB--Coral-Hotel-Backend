"use strict";

const mysqlPool = require("../../../databases/mysql-pool");
const dateFns = require("date-fns"); // Usando la librería date-fns

/**
 * TODO: Función que permite crear las reservas del id de Usuario.
 * Si no hay errores, http 201 y 500 en otro caso
 */
async function createOrder(req, res, next) {
    const orderData = {...req.body };
    const { claims } = req;
    const { idUser } = claims;

    const orderDate = dateFns
        .parse(Date.now())
        .toISOString()
        .substring(0, 19)
        .replace("T", " ");

    try {
        const connection = await mysqlPool.getConnection();

        await connection.query(`INSERT INTO \`order\` SET ?`, {
            idUser: idUser,
            idExperience: orderData.idExperience,
            units: orderData.units,
            orderDate: orderDate,
            comments: orderData.comments
        });

        connection.release();

        console.log("ORDER CREADA");
        return res.status(201).send();
    } catch (e) {
        res.status(500).send(e.message);
    }
}

module.exports = createOrder;