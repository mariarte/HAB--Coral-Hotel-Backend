"use strict";

const mysqlPool = require("../../../databases/mysql-pool");
const dateFns = require("date-fns"); // Usando la librería date-fns

/**
 * TODO: Se modifica la order con los datos introducidos por el usuario, para ello:
 * 1. Conecta con la DB
 * 2. Hace el update en DB
 */
async function updateOrder(req, res, next) {
    const orderData = {...req.body };
    const { idOrder } = orderData;
    const { units } = orderData;
    const { comments } = orderData;

    // const now = new Date();
    // const orderDate = now
    //     .toISOString()
    //     .substring(0, 19)
    //     .replace("T", " ");
    // console.log("ORDER DATE: ", orderDate);

    const fecha = dateFns.parse(Date.now()); //=> Tue Feb 11 2014 11:30:30
    const orderDate = fecha
        .toISOString()
        .substring(0, 19)
        .replace("T", " ");
    console.log("FECHA DATE-FNS: ", orderDate);

    try {
        const connection = await mysqlPool.getConnection();

        await connection.query(`UPDATE \`order\` 
            SET units = '${units}', 
                comments = '${comments}',
                confirmedAt = '${orderDate}'
            WHERE idOrder = '${idOrder}';`);

        console.log("ID Order: ", req.idOrder);

        connection.release();

        console.log("Datos: ", orderData);
        console.log("orderDate: ", orderDate);

        console.log("ORDER CONFIRMADA");

        return res.status(204).send("Enviado a DB");
    } catch (e) {
        console.error(e);
        return res.status(500).send(e.message);
    }
}

module.exports = updateOrder;