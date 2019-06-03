"use strict";

const express = require("express");
const router = express.Router();

const checkJwtToken = require("../controllers/session/check-jwt-token");
const createOrder = require("../controllers/order/create-order");
const showOrder = require("../controllers/order/show-orders");
const showOrderConfirmed = require("../controllers/order/show-order-confirmed");
const updateOrder = require("../controllers/order/update-order");

router.post("/order", checkJwtToken, createOrder); // Crear order
router.get("/order", checkJwtToken, showOrder); // Mostrar TODAS las order de un usuario
router.get("/order/confirmed", checkJwtToken, showOrderConfirmed); // Mostrar solo las order CONFIRMADAS de un usuario
router.put("/order", checkJwtToken, updateOrder); // Modifica la order

module.exports = router;