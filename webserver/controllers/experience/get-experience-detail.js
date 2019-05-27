"use strict";

const mysqlPool = require("../../../databases/mysql-pool");

/**
 * TODO: Busca las experiencias (por idExperience), que se pasan por parámetro,
 * para enviar la petición:
 * 1. Gestiona el parámetro que pasa el usuario
 * 2. Conecta a la DB
 * 3. Consulta los datos de la DB
 * 4. Envía la petición al usuario
 */
async function getExperienceDetail(req, res, next) {
    const experienceParam = req.params.idExperience;
    console.log(req.params);
    // const idExperience = req.params;
    // console.log(idExperience);

    const connection = await mysqlPool.getConnection();

    const [experienceDetail] = await connection.query(
        `SELECT idExperience, name, title, description, price, image1, image2, image3, image4 FROM experiences WHERE idExperience= '${experienceParam}'`
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
    console.log([experienceDetail]);

    return res.status(200).send(experienceDetail);
}

module.exports = getExperienceDetail;