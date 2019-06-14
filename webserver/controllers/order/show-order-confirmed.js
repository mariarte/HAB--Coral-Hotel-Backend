"use strict";

const mysqlPool = require("../../../databases/mysql-pool");

/**
 * TODO: Función que permite mostrar las reservas confirmadas realizadas por el usuario,
 * Si no hay errores, http 200 y 500 en otro caso
 */
async function showUserOrders(req, res, next) {
    const { idUser } = req.claims;

    try {
        const connection = await mysqlPool.getConnection();

        const [orderData] = await connection.query(
            `SELECT O.idOrder, U.idUser, E.idExperience, E.title, O.units, E.price, O.comments, O.confirmedAt 
            FROM users U
            JOIN \`order\` O ON O.idUser = U.idUser
            JOIN experiences E on E.idExperience = O.idExperience
            WHERE U.idUser = '${idUser}' AND O.confirmedAt IS NOT NULL
            ORDER BY O.confirmedAt;`
        );
        connection.release();

        const data = orderData.map(orderItem => {
            console.log(orderItem.confirmedAt);
            return {
                idOrder: orderItem.idOrder,
                idUser: idUser,
                idExperience: orderItem.idExperience,
                title: orderItem.title,
                units: orderItem.units,
                price: orderItem.price,
                comments: orderItem.comments,
                confirmedAt: orderItem.confirmedAt
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