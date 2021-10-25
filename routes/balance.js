const express = require("express");
const router = express.Router();
const Balance = require("../database/model/Balance");

router.get("/:id", (req, res) => {
    Balance.findByPk(req.params.id).then(balance => {
        res.json(balance);
    });
});

router.get("/user/:id", (req, res) => {
    console.log(req.params);
    Balance.findAll({
        where: {
            userId: req.params.id,
        },
    }).then((balance) => {
        res.json(balance);
    });
});

router.post("/", (req, res) => {
    Balance.create({
        userId: req.body.userId,
        amount: req.body.amount
    }).then(() => {
        return res.status(200).json({ message: "balance created" });
    }).catch((err) => {
        return res.status(400).json({ message: err.message });
    })
});

router.patch("/:id", (req, res) => {
    Balance.update(
        {
            amount: req.body.amount
        },
        {
            where: {
                id: req.params.id,
            },
        }
    ).then((result) => {
        res.json(result);
    });
});

module.exports = router;