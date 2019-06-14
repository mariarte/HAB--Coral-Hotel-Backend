"use strict";

const mysqlPool = require("../../../databases/mysql-pool");
const dateFns = require("date-fns"); // Usando la librería date-fns

/**
 * TODO: Crea las reservas del id de Usuario, para ello:
 * 1. Recupera los datos de la order a actualizar
 * 2. Guardar la fecha de ahora
 * 3. Conecta a la DB y se hace el insert en DB
 * 4. Envía la petición al usuario
 */
async function createOrder(req, res, next) {
    /**
     * 1. Extrae los datos de la order que se van a insertar en la query
     */
    const orderData = {...req.body };
    const { claims } = req;
    const { idUser } = claims;

    // const now = new Date();
    // const orderDate = now
    //     .toISOString()
    //     .substring(0, 19)
    //     .replace("T", " ");

    /**
     * 2. Guarda la fecha de ahora para guardarla en la DB cuando se haga el insert
     */
    const orderDate = dateFns
        .parse(Date.now())
        .toISOString()
        .substring(0, 19)
        .replace("T", " ");
    console.log("FECHA DATE-FNS: ", orderDate);

    try {
        /**
         * 3. Conexión con la DB para realizar el insert
         */
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

        /**
         * 4. Envía los datos al usuario
         */
        return res.status(201).send();
    } catch (e) {
        res.status(500).send(e.message);
    }
}

module.exports = createOrder;