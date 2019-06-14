"use strict";

const mysqlPool = require("../../../databases/mysql-pool");
const dateFns = require("date-fns"); // Usando la librería date-fns para control de fechas

/**
 * TODO: Función que permite modificar la order con los datos introducidos
 * Si no hay errores, http 204 y 500 en otro caso
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

    const fecha = dateFns.parse(Date.now());
    const orderDate = fecha
        .toISOString()
        .substring(0, 19)
        .replace("T", " ");
    console.log("FECHA DATE-FNS: ", orderDate); //***************** */

    try {
        const connection = await mysqlPool.getConnection();

        await connection.query(`UPDATE \`order\` 
            SET units = '${units}', 
                comments = '${comments}',
                confirmedAt = '${orderDate}'
            WHERE idOrder = '${idOrder}';`);

        connection.release();
        console.log("ORDER CONFIRMADA");

        return res.status(204).send("Enviado a DB");
    } catch (e) {
        console.error(e);
        return res.status(500).send(e.message);
    }
}

module.exports = updateOrder;