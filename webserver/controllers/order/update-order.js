"use strict";

const mysqlPool = require("../../../databases/mysql-pool");

/**
 * TODO: Se modifica la order con los datos introducidos por el usuario, para ello:
 * 1. Conecta con la DB
 * 2. Hace el update en DB
 */
async function updateOrder(req, res, next) {
    const orderData = {...req.body };

    const now = new Date();
    const orderDate = now
        .toISOString()
        .substring(0, 19)
        .replace("T", " ");

    try {
        const connection = await mysqlPool.getConnection();

        await connection.query(`UPDATE \`order\` 
            SET units = '${units}', 
                comments = '${comments}',
                confirmedAt = orderDate
            WHERE idOrder = '${idOrder}';`);

        console.log("ID Order: ", req.idOrder);

        connection.release();

        console.log("Datos: ", orderData);

        console.log("ORDER CONFIRMADA");

        return res.status(204).send("Enviado a DB");
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

module.exports = updateOrder;