const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// POST Login for Admin Portal
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Simple demo admin check
    if (email === 'admin@ceylonthembiliexports.lk' && password === 'admin123') {
      const token = jwt.sign(
        { email, role: 'Super Admin', name: 'Export Director' },
        process.env.JWT_SECRET || 'secret_key_2026',
        { expiresIn: '1d' }
      );

      return res.json({
        success: true,
        token,
        user: { name: 'Export Director', email, role: 'Super Admin' }
      });
    }

    return res.status(401).json({ success: false, message: 'Invalid email or password. Use admin@ceylonthembiliexports.lk / admin123' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
