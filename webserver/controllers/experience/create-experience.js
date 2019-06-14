"use strict";

const mysqlPool = require("../../../databases/mysql-pool");

/**
 * TODO: Función que permite crear nuevas experiencias.
 * Sino hay errores, http 201 y 500 en otro caso.
 */
async function createExperience(req, res, next) {
    const experienceData = req.body;

    const connection = await mysqlPool.getConnection();
    const sqlInsercion = "INSERT INTO experiences SET ?";

    try {
        const resultado = await connection.query(sqlInsercion, {
            name: experienceData.name,
            title: experienceData.title,
            description: experienceData.description,
            price: experienceData.price,
            image1: experienceData.image1,
            image2: experienceData.image2,
            image3: experienceData.image3,
            image4: experienceData.image4
        });
        connection.release();

        return res.status(201).send();
    } catch (e) {
        if (connection) {
            connection.release();
        }
        return res.status(500).send(e.message);
    }
}
module.exports = createExperience;