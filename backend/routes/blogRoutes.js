const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const { sampleBlogs } = require('../data/mockData');

// GET all blogs
router.get('/', async (req, res) => {
  try {
    let blogs = [];
    try {
      blogs = await Blog.find().sort({ publishedAt: -1 });
    } catch (e) {}

    if (!blogs || blogs.length === 0) {
      blogs = sampleBlogs;
    }

    res.json({ success: true, count: blogs.length, data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET single blog by slug
router.get('/:slug', async (req, res) => {
  try {
    let blog = null;
    try {
      blog = await Blog.findOne({ slug: req.params.slug });
    } catch (e) {}

    if (!blog) {
      blog = sampleBlogs.find(b => b.slug === req.params.slug);
    }

    if (!blog) {
      return res.status(404).json({ success: false, message: 'Article not found' });
    }

    res.json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
