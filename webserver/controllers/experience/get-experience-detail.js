"use strict";

const mysqlPool = require("../../../databases/mysql-pool");

/**
 * TODO: Busca las experiencias (por idExperience), que se pasan por parámetro,
 * para enviar la petición:
 * 1. Recupera el id de experience para poder acceder a los datos
 * 2. Conecta a la DB
 * 3. Consulta los datos de esa experience en la DB
 * 4. Envía la petición al usuario
 */
async function getExperienceDetail(req, res, next) {
    /**
     * Recupera el idExperience que ha "seleccionado" el usuario en ese momento,
     * para acceder a los datos de la DB
     */
    const experienceParam = req.params.idExperience;

    /**
     * 2. Conexión con DB
     */
    const connection = await mysqlPool.getConnection();

    /**
     * 3. Se realiza la consulta a la DB para acceder a todas las propiedades de
     * la experience elegida
     */
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

    /**
     * 4. Envía la petición al usuario
     */
    return res.status(200).send(experienceDetail);
}

module.exports = getExperienceDetail;