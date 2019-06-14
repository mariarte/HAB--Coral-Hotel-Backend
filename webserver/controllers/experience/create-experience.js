"use strict";

const mysqlPool = require("../../../databases/mysql-pool");

/**
 * TODO: Crea las experiencias, para ello:
 * 1. Gestiona los datos que llegan
 * 2. Conecta a la DB
 * 3. Hace el insert en DB
 * 4. Envía la petición al usuario
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