"use strict";

const mysqlPool = require("../../../databases/mysql-pool");
const dateFns = require("date-fns"); // Usando la librería date-fns

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
    // const time = dateFns.format(Date.now(), "hh:mm A");
    // console.log("HORA: ", time);

    // const now = new Date();
    // const orderDate = now
    //     .toISOString()
    //     .substring(0, 19)
    //     .replace("T", " ");
    const orderDate = dateFns
        .parse(Date.now())
        .toISOString()
        .substring(0, 19)
        .replace("T", " "); //=> Tue Feb 11 2014 11:30:30
    console.log("FECHA DATE-FNS: ", orderDate);

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