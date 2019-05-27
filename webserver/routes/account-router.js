"use strict";

const express = require("express");
const router = express.Router();

const createAccountController = require("../controllers/account/create-account-controller");
const checkLoginController = require("../controllers/account/login-controller");
const logout = require("../controllers/account/logout-controller");

router.post("/account", createAccountController); // Crear cuenta
router.post("/account/login", checkLoginController); // Hacer el login
router.get("/account/logout", logout); // Hacer logout

module.exports = router;