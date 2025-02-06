const express = require('express');
const Order = require('../models/Order');

const router = express.Router();
router.post('/', async (req, res) => {
  try {
    const { user, products, totalAmount, address } = req.body;

    const newOrder = new Order({ user, products, totalAmount, address });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
