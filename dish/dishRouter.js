const express = require("express");
const router = express.Router();
const knex = require("knex");
const knexConfig = require("../knexfile.js");

const dishes = require("../dish/dish-model.js");

const db = knex(knexConfig.development);

router.get("/", async (req, res) => {
  const dish = await dishes.getDishes();
  try {
    res.status(200).json(dish);
  } catch (err) {
    res.status(500).json({ message: "Internal Error", err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dish = await dishes.getDish(id);
    res.status(200).json(dish);
  } catch (err) {
    res.status(500).json({ message: "Internal Error", err });
  }
});

module.exports = router;
