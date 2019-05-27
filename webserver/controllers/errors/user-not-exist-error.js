"use strict";

/**
 * TODO: Se crea una clase ERROR, UserNotExistError, que se compone de 2 propiedades:
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