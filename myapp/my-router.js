const express = require("express");
const router = express.Router();

// Визначимо домашній роутер
router.get("/", (req, res) => {
  res.send("Це головний роутер");
});

// Визначимо роутер about
router.get("/about", (req, res) => {
  res.send("About");
  console.log("About");
});

module.exports = router;
