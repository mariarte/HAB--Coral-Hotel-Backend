"use strict";

const mysqlPool = require("../../../databases/mysql-pool");

/**
 * TODO: Función que permite borrar la order elegida
 * Si no hay errores, http 204 y 500 en otro caso
 */
async function deleteOrder(req, res, next) {
    const idOrderParam = req.params.idOrder;

    try {
        const connection = await mysqlPool.getConnection();

        await connection.query(
            `DELETE FROM \`order\` WHERE idOrder = '${idOrderParam}';`
        );
        connection.release();
        console.log("ORDER BORRADA");

        return res.status(204).send("Borrado de la DB");
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

module.exports = deleteOrder;