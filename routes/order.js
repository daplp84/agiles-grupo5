const express = require("express");
const Item = require("../database/model/Item");

const router = express.Router();

const Order = require("../database/model/Order");

// Crea una Orden
router.post("/", (req, res) => {
  Order.create({
    numberOrder: req.body.numberOrder,
    state: req.body.state
  }).then((order) => {
    res.json(order);
  });
});

// Devuelve los datos de una Orden
router.get("/:id", (req, res) => {
  Order.findByPk(req.params.id).then( order => {
      res.json(order);
  });
});

// Devuelve los Items de una Orden
router.get("/itemsByOrder/:orderId", (req, res) => {
  Item.findAll({
    where: {
      orderId: req.params.orderId,
    },
  }).then((items) => {
    res.json(items);
  });
});

// Elimina un item de una Orden
router.patch("/deleteItemFromOrder/:id", async (req, res) => {
  await Item.destroy({
    where: {
      id: req.body.id
    },
    force: true
  });
});

// Agrega un item a la Orden
router.post("/", (req, res) => {
  Item.create({
      quantity: req.body.quantity,
      price: req.body.price,
      state: req.body.state,
      comments: req.body.comments,
      orderId: req.body.orderId,
      productId: req.body.productId
  }).then((item) => {
      res.json(item);
  });
});

module.exports = router;