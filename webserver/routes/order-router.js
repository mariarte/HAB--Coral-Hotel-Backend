"use strict";

const express = require("express");
const router = express.Router();

const checkJwtToken = require("../controllers/session/check-jwt-token");
const createOrder = require("../controllers/order/create-order");
const showOrder = require("../controllers/order/show-orders");

router.post("/order", checkJwtToken, createOrder); // Crear order
router.get("/order/showOrders", checkJwtToken, showOrder); // Mostrar las order de un usuario

module.exports = router;