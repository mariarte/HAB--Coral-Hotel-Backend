"use strict";

const mysqlPool = require("../../../databases/mysql-pool");

/**
 * TODO: Muestra las reservas que haya realizado el usuario, para ello:
 * 1. Recupera el id del usuario para acceder a sus datos
 * 2. Conecta a la DB
 * 3. Consulta las reservas que tenga ese usuario en la DB
 * 4. Recorre las order que se encuentran en DB
 * 5. Envía la petición al usuario
 */
async function showUserOrders(req, res, next) {
    /**
     * 1. Recupera el idUser del usuario registrado en ese momento para acceder
     * a las order que tenga en DB
     */
    const { idUser } = req.claims;

    try {
        /**
         * 2. Conexión con DB
         */
        const connection = await mysqlPool.getConnection();

        /**
         * 3. Se realiza la consulta a la DB para mostrar TODAS las experiencias
         * añadidas a la cesta (Aún sin confirmar)
         */
        const [orderData] = await connection.query(
            `SELECT O.idOrder, U.idUser, E.idExperience, E.title, O.units, E.price, O.comments, O.orderDate
            FROM users U
            JOIN \`order\` O ON O.idUser = U.idUser
            JOIN experiences E on E.idExperience = O.idExperience
            WHERE U.idUser = '${idUser}' AND O.confirmedAt IS NULL
            ORDER BY O.orderDate;`
        );
        connection.release();

        /**
         * 4. Recorre todas las order (aún sin confirmar) y las va enviando
         * al usuario hasta mostrar TODAS
         */
        const data = orderData.map(orderItem => {
            return {
                idOrder: orderItem.idOrder,
                idUser: idUser,
                idExperience: orderItem.idExperience,
                title: orderItem.title,
                units: orderItem.units,
                price: orderItem.price,
                comments: orderItem.comments,
                orderDate: orderItem.orderDate
            };
        });

        /**
         * 5. Envía la petición de TODAS las order al usuario
         */
        return res.status(200).send(data);
    } catch (e) {
        return res.status(500).send(e.message);
        console.error(e);
        return res.send(e.message);
    }
}

module.exports = showUserOrders;