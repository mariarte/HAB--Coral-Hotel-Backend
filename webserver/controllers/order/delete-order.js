"use strict";

const mysqlPool = require("../../../databases/mysql-pool");

/**
 * TODO: Borra la order, para ello:
 * 1. Conecta a la DB
 * 2. Consulta los datos de la DB y hace delete
 * 3. Envía mensaje de confirmación
 */
async function deleteOrder(req, res, next) {
    const orderData = {...req.body };
    const { idOrder } = orderData;

    try {
        const connection = await mysqlPool.getConnection();

        await connection.query(
            `DELETE FROM \`order\` WHERE idOrder = '${idOrder}';`
        );
        connection.release();

        console.log("ORDER BORRADA");

        return res.status(204).send("Borrado de la DB");
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

module.exports = deleteOrder;