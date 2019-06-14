"use strict";

const mysqlPool = require("../../../databases/mysql-pool");

/**
 * TODO: Función que permite buscar las experiencias (por idExperience),
 * que se pasa por parámetro, para enviar la petición:
 * http 200
 */
async function getExperienceDetail(req, res, next) {
    const experienceParam = req.params.idExperience;

    const connection = await mysqlPool.getConnection();

    const [experienceDetail] = await connection.query(
        `SELECT idExperience, name, title, description, price, image1, image2, image3, image4 
        FROM experiences 
        WHERE idExperience= '${experienceParam}'`
    );
    connection.release();

    const data = experienceDetail.map(experienceItem => {
        return {
            idExperience: experienceParam,
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

    return res.status(200).send(experienceDetail);
}

module.exports = getExperienceDetail;