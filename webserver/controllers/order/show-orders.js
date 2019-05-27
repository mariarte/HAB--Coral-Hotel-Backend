"use strict";

const mysqlPool = require("../../../databases/mysql-pool");

/**
 * TODO: Muestra las reservas que haya realizado el usuario, para ello:
 * 1. Recupera el id del usuario para acceder a sus datos
 * 2. Conecta a la DB
 * 3. Consulta las reservas que tenga ese usuario en la DB
 * 4. Envía la petición al usuario
 */
async function showUserOrders(req, res, next) {
    const { idUser } = req.claims;

    try {
        const connection = await mysqlPool.getConnection();
        const [orderData] = await connection.query(
            `SELECT U.idUser, O.orderDate, E.title, E.price
            FROM users U
            JOIN \`order\` O ON O.idUser = U.idUser
            JOIN experiences E on E.idExperience = O.idExperience
            WHERE U.idUser = '${idUser}'
            ORDER BY U.idUser;`
        );
        console.log(orderData);
        console.log(idUser);
        connection.release();

        const data = orderData.map(orderItem => {
            return {
                orderDate: orderItem.orderDate,
                title: orderItem.title,
                price: orderItem.price
            };
        });

        return res.status(200).send(data);
    } catch (e) {
        return res.status(500).send(e.message);
        console.error(e);
        return res.send(e.message);
    }
}

module.exports = showUserOrders;