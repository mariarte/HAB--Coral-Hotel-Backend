"use strict";

const mysqlPool = require("../../../databases/mysql-pool");

/**
 * TODO: Crea las reservas del id, para ello:
 * 1. Gestiona los datos que llegan
 * 2. Conecta a la DB
 * 3. Hace el insert en DB
 * 4. Envía 201 al usuario
 */
async function createOrder(req, res, next) {
    const orderData = {...req.body };
    const { claims } = req;
    const { idUser } = claims;
    // console.log("User: ", idUser);
    // console.log("Id Experience:", orderData.idExperience);
    // console.log("units: ", orderData.units);
    // console.log("comments: ", orderData.comments);

    const now = new Date();
    const orderDate = now;
    // .toISOString()
    // .substring(0, 19)
    // .replace("T", " ");

    const connection = await mysqlPool.getConnection();

    try {
        await connection.query(`INSERT INTO \`order\` SET ?`, {
            idUser: idUser,
            idExperience: orderData.idExperience,
            units: orderData.units,
            orderDate: orderDate,
            comments: orderData.comments
        });

        connection.release();

        console.log("Datos: ", orderData);

        return res.status(201).send();
    } catch (e) {
        res.status(500).send(e.message);
    }
}

module.exports = createOrder;