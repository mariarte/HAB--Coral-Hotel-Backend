"use strict";

const express = require("express");
const experienceRouter = express.Router();

const createExperience = require("../controllers/experience/create-experience");
const getExperiences = require("../controllers/experience/get-experiences");
// const getExperienceDetail = require("../controllers/experience/get-experience-detail");
const getExperienceDetailByTitle = require("../controllers/experience/get-experience-detail-by-title");

experienceRouter.post("/createExperience", createExperience); // Crear experiencias
experienceRouter.get("/experiences", getExperiences); // Mostrar todas las experiencias
// experienceRouter.get("/experiences/:idExperience", getExperienceDetail);
experienceRouter.get("/experiences/:title", getExperienceDetailByTitle); // Mostrar experiencias que se indican en el parámetro

module.exports = experienceRouter;