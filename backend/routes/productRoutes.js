const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const { sampleProducts } = require('../data/mockData');

// GET all products
router.get('/', async (req, res) => {
  try {
    const { category, featured } = req.query;
    let query = {};
    if (category && category !== 'All') {
      query.category = category;
    }
    if (featured === 'true') {
      query.isFeatured = true;
    }

    let products = [];
    if (mongoose.connection.readyState === 1) {
      try {
        products = await Product.find(query).sort({ createdAt: -1 });
      } catch (e) {
        console.warn('Database query failed, returning fallback dataset.');
      }
    }

    if (!products || products.length === 0) {
      products = sampleProducts;
      if (category && category !== 'All') {
        products = products.filter(p => p.category === category);
      }
      if (featured === 'true') {
        products = products.filter(p => p.isFeatured);
      }
    }

    res.json({ success: true, count: products.length, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET single product by slug
router.get('/:slug', async (req, res) => {
  try {
    let product = null;
    if (mongoose.connection.readyState === 1) {
      try {
        product = await Product.findOne({ slug: req.params.slug });
      } catch (e) {}
    }

    if (!product) {
      product = sampleProducts.find(p => p.slug === req.params.slug);
    }

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST create new product (Admin)
router.post('/', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const saved = await newProduct.save();
    res.status(201).json({ success: true, data: saved });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = router;
