const express = require("express");
const router = express.Router();
const User = require("../database/model/User");

// Devuelve los datos de un Usuario
router.get("/:id", (req, res) => {
    User.findByPk(req.params.id).then((user) => {
        res.json(user);
    });
});

// Crea un Usuario
router.post("/", (req, res) => {
    User.create({
        userName: req.body.userName,
        dni: req.body.dni,
        email: req.body.email,
        name: req.body.name,
        dateBirth: req.body.dateBirth
    }).then((user) => {
        res.json(user);
    });
});

module.exports = router;