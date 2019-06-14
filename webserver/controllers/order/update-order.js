"use strict";

const mysqlPool = require("../../../databases/mysql-pool");
const dateFns = require("date-fns"); // Usando la librería date-fns para control de fechas

/**
 * TODO: Se modifica la order con los datos introducidos por el usuario, para ello:
 * 1. Recupera los datos de la order a actualizar
 * 2. Guardar la fecha de ahora
 * 3. Conecta con la DB y se hace el update en DB
 * 4. Envía la petición al usuario
 */
async function updateOrder(req, res, next) {
    /**
     * 1. Extrae los datos de la order que se van a actualizar en la query
     */
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

    /**
     * 2. Guarda la fecha de ahora para guardarla en la DB cuando se haga el update
     */
    const fecha = dateFns.parse(Date.now());
    const orderDate = fecha
        .toISOString()
        .substring(0, 19)
        .replace("T", " ");
    console.log("FECHA DATE-FNS: ", orderDate); //***************** */

    try {
        /**
         * 3. Conexión con la DB para realizar el update
         */
        const connection = await mysqlPool.getConnection();

        await connection.query(`UPDATE \`order\` 
            SET units = '${units}', 
                comments = '${comments}',
                confirmedAt = '${orderDate}'
            WHERE idOrder = '${idOrder}';`);

        connection.release();
        // console.log("ID Order: ", req.idOrder);
        // console.log("Datos: ", orderData);
        // console.log("orderDate: ", orderDate);

        console.log("ORDER CONFIRMADA");

        /**
         * 4. Envía los datos al usuario
         */
        return res.status(204).send("Enviado a DB");
    } catch (e) {
        console.error(e);
        return res.status(500).send(e.message);
    }
}

module.exports = updateOrder;