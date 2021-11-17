const express = require("express");

const router = express.Router();

const Bar = require("../database/model/Bar");
const Product = require("../database/model/Product");

// Crea un Bar
router.post("/", (req, res) => {
  Bar.create({
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    location: req.body.location,
    image: req.body.image,
    state: req.body.state
  }).then((bar) => {
    res.json(bar);
  });
});

// Devuelve los datos de un Bar y sus Productos
router.get("/:id", (req, res) => {
  Bar.findOne({
	where: {id: req.params.id},
	include: {
		model: Product,
		as: 'products' }
	}).then( bar => {
      res.json(bar);
  });
});

// Devuelve todos los Productos de un Bar
router.get("/productByBar/:barId", (req, res) => {
  Product.findAll({
    where: {
      barId: req.params.barId,
    },
  }).then((products) => {
    res.json(products);
  });
});

module.exports = router;