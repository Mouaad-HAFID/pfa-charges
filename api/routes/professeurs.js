const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const controller = require("../controllers/profs.controller");
const db = require("../models/index");
const chargeRouter = require("./charges");
const prof = db.professeur;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//GET ALL
router.get("/", controller.getAllProfs);

//GET ONE
router.get("/:id", controller.getProfById);

router.use("/:id/charge", chargeRouter);
//CREATE
router.post("/", controller.createProf);

//UPDATE
router.put("/:id", controller.updateProf);

//DELETE
router.delete("/:id", controller.deleteProf);
module.exports = router;
