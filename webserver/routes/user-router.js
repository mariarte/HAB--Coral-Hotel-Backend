"use strict";

const express = require("express");
const router = express.Router();

const checkJwtToken = require("../controllers/session/check-jwt-token");
const deleteUserProfile = require("../controllers/user/delete-user-profile");
const getUserProfile = require("../controllers/user/get-user-profile-controller");
const updateUserProfile = require("../controllers/user/update-user-profile");

router.delete("/user/delete", checkJwtToken, deleteUserProfile); // Borrar perfil de usuario
router.get("/user/profile", checkJwtToken, getUserProfile); // Mostrar perfil
router.put("/user", checkJwtToken, updateUserProfile); // Actualizar perfil

module.exports = router;