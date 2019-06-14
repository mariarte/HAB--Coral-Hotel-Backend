"use strict";

const mysqlPool = require("../../../databases/mysql-pool");

/**
 * TODO: Busca las experiencias para enviar la petición al usuario:
 * 1. Conecta a la DB
 * 2. Consulta las experiences de la DB
 * 3. Recorre las experiences que se encuentran en DB
 * 4. Envía la petición al usuario
 */
async function getExperiences(req, res, next) {
    const connection = await mysqlPool.getConnection();

    const [experienceData] = await connection.query(
        "SELECT idExperience, name, title, description, price, image1, image2, image3, image4 FROM experiences;"
    );
    connection.release();

    const data = experienceData.map(experienceItem => {
        return {
            idExperience: experienceItem.idExperience,
            name: experienceItem.name,
            title: experienceItem.title,
            description: experienceItem.description,
            price: experienceItem.price,
            image1: experienceItem.image1,
            image2: experienceItem.image2,
            image3: experienceItem.image3,
            image4: experienceItem.image4
        };
    });

    return res.status(200).send(data);
}

module.exports = getExperiences;