const express = require("express");

const router = express.Router();

const Item = require("../database/model/Item");

// Devuelve los datos de un Item
router.get("/:id", (req, res) => {
  Item.findByPk(req.params.id).then( item => {
      res.json(item);
  });
});

// Modifica cantidad de un Item
router.patch("/:id", (req, res) => {
  Item.update(
    {
      quantity: req.body.quantity
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((item) => {
    res.json(item);
  });
});

module.exports = router;