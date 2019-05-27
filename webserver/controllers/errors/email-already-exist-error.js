"use strict";

/**
 * TODO: Se crea una clase ERROR, EmailAlreadyExistError, que se compone de 2 propiedades:
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