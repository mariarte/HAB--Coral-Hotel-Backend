"use strict";

/**
 * TODO: Se crea una clase ERROR, UserNotExistError, para comprobar si el email
 * ya existe en la DB (se usa cuando el usuario quiere logearse y no existe)
 * y se compone de 2 propiedades:
 * 1. message
 * 2. name: "UserNotExistError"
 */
class UserNotExistError extends Error {
    constructor(message) {
        super();
        this.message = message;
        this.name = "UserNotExistError";
    }
}

module.exports = UserNotExistError;