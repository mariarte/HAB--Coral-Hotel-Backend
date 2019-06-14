"use strict";

/**
 * TODO: Se crea una clase ERROR, EmailAlreadyExistError, para comprobar si
 * el email ya existía anteriormente (se usa cuando el usuario se registra con
 * un email que ya existe en DB) y se compone de 2 propiedades:
 * 1. message
 * 2. name: "EmailAlreadyExistError"
 */
class EmailAlreadyExistError extends Error {
    constructor(message) {
        super();
        this.message = message;
        this.name = "EmailAlreadyExistError";
    }
}

module.exports = EmailAlreadyExistError;