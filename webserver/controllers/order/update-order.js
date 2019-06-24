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

    const fecha = dateFns.parse(Date.now());
    const orderDate = fecha
        .toISOString()
        .substring(0, 19)
        .replace("T", " ");

    try {
        const connection = await mysqlPool.getConnection();

        await connection.query(`UPDATE \`order\` 
            SET units = '${units}', 
                comments = '${comments}',
                confirmedAt = '${orderDate}'
            WHERE idOrder = '${idOrder}';`);

        console.log("*", comments, "*");
        connection.release();
        console.log("ORDER CONFIRMADA");

        return res.status(204).send("Enviado a DB");
    } catch (e) {
        console.error(e);
        return res.status(500).send(e.message);
    }
}

module.exports = updateOrder;