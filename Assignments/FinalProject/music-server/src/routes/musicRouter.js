const express = require("express");
const musicControler = require("../controllers/musicController");

const musicRouter = express.Router();

musicRouter.get("/", musicControler.getMusics);

module.exports = musicRouter;
