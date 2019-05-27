"use strict";

const mysqlPool = require("../../../databases/mysql-pool");

/**
 * TODO: Busca las experiencias (por title), que se pasa por parámetro,
 * para enviar la petición:
 * 1. Gestiona el parámetro que pasa el usuario
 * 2. Conecta a la DB
 * 3. Consulta los datos de la DB
 * 4. Envía la petición al usuario
 */
async function getExperienceDetailByTitle(req, res, next) {
    const experienceParam = req.params.title;
    // console.log(experienceParam);

    const connection = await mysqlPool.getConnection();

    const [experienceDetail] = await connection.query(
        `SELECT * FROM experiences WHERE MATCH(title,description)
        AGAINST ('${experienceParam}')`
    );
    connection.release();

    const data = experienceDetail.map(experienceItem => {
        return {
            idExperience: experienceItem.idExperience,
            name: experienceItem.name,
            title: decodeURI(experienceParam),
            description: decodeURI(experienceItem.description),
            price: experienceItem.price,
            image1: experienceItem.image1,
            image2: experienceItem.image2,
            image3: experienceItem.image3,
            image4: experienceItem.image4
        };
    });
    console.log([experienceDetail]);

    return res.status(200).send(experienceDetail);
}

module.exports = getExperienceDetailByTitle;