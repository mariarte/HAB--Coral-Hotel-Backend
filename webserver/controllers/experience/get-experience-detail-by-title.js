"use strict";

const mysqlPool = require("../../../databases/mysql-pool");

/**
 * TODO: Busca las experiencias (por title), que se pasa por parámetro,
 * para enviar la petición. Que se usará para el buscador:
 * 1. Recupera el title de experience para poder acceder a los datos
 * 2. Conecta a la DB
 * 3. Consulta los datos de esa experience en la DB usando Full Text Search
 * 4. Envía la petición al usuario
 */
async function getExperienceDetailByTitle(req, res, next) {
    /**
     * 1. Recupera el title de la experience que ha "seleccionado" el usuario
     * en ese momento, para acceder a los datos de la DB
     */
    const experienceParam = req.params.title;

    /**
     * 2. Conexión con DB
     */
    const connection = await mysqlPool.getConnection();

    /**
     * 3. Se realiza la consulta a la DB para acceder a todas las
     * propiedades de la experience elegida
     */
    const [experienceDetail] = await connection.query(
        `SELECT * 
        FROM experiences 
        WHERE MATCH(title,description)
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

    /**
     * 4. Envía la petición al usuario
     */
    return res.status(200).send(experienceDetail);
}

module.exports = getExperienceDetailByTitle;