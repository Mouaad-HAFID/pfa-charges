const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../models/index");
const matieres = db.matiere;

//GET ALL
router.get("/", (req, res) => {
  res.send("ALL matieres");
});

//GET ONE
router.get("/:name", (req, res) => {
  var name = req.params.name;
  res.send(`matiere ${name}`);
});

//CREATE
router.post("/", (req, res) => {});

//UPDATE
router.put("/:name", (req, res) => {});

//DELETE
router.delete("/:name", (req, res) => {});
module.exports = router;