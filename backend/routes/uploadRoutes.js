const express = require('express');
const multer = require('multer');
const cloudinary = require('../config/cloudinary');
const Product = require('../models/Product');
const requireAdmin = require('../middleware/authMiddleware');

const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, callback) => {
    if (!file.mimetype.startsWith('image/')) {
      return callback(new Error('Only image files are allowed.'));
    }
    callback(null, true);
  }
});

const uploadToCloudinary = (buffer) => new Promise((resolve, reject) => {
  const stream = cloudinary.uploader.upload_stream(
    {
      folder: 'ceylon-gold/products',
      resource_type: 'image'
    },
    (error, result) => error ? reject(error) : resolve(result)
  );
  stream.end(buffer);
});

// Upload an image to Cloudinary and save its secure URL on the product.
router.post('/products/:id/image', requireAdmin, upload.single('image'), async (req, res) => {
  try {
    if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
      return res.status(503).json({ success: false, message: 'Cloudinary environment variables are not configured.' });
    }
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Please select an image to upload.' });
    }
    if (require('mongoose').connection.readyState !== 1) {
      return res.status(503).json({ success: false, message: 'Database is not connected. Please try again shortly.' });
    }

    const result = await uploadToCloudinary(req.file.buffer);
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { $push: { images: result.secure_url } },
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found.' });
    }

    res.json({
      success: true,
      message: 'Image uploaded to Cloudinary and added to the product.',
      data: { url: result.secure_url, publicId: result.public_id, product }
    });
  } catch (error) {
    const status = error instanceof multer.MulterError || error.message.includes('image files') ? 400 : 500;
    res.status(status).json({ success: false, message: error.message });
  }
});

module.exports = router;
