const express = require("express");
const router = express.Router();
const User = require("../database/model/User");

router.get("/:id", (req, res) => {
    User.findByPk(req.params.id).then((user) => {
        res.json(user);
    });
});

router.post("/", (req, res) => {
    User.create({
        userName: req.body.userName
    }).then((user) => {
        res.json(user);
    });
});

router.patch("/:id", (req, res) => {
    User.update(
        {
            userName: req.body.userName
        },
        {
            where: {
                id: req.params.id,
            },
        }
    ).then(result => {
        res.json(result);
    });
});

module.exports = router;