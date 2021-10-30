const express = require("express");

const router = express.Router();

const Product = require("../database/model/Product");

// Crea un Producto
router.post("/", (req, res) => {
  Product.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    subcategory: req.body.subcategory,
    image: req.body.image
  }).then((product) => {
    res.json(product);
  });
});

// Devuelve los datos de un Producto
router.get("/:id", (req, res) => {
  Product.findByPk(req.params.id).then( product => {
      res.json(product);
  });
});


module.exports = router;