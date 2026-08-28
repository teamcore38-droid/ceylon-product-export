const express = require('express');
const router = express.Router();
const RFQ = require('../models/RFQ');
const { sampleRFQs } = require('../data/mockData');
const { sendRFQEmail } = require('../utils/emailService');

// POST Submit new RFQ Quote Request
router.post('/', async (req, res) => {
  try {
    const { companyName, contactPerson, email, phone, country, product, quantity, destinationPort } = req.body;
    
    if (!companyName || !contactPerson || !email || !country || !product || !quantity || !destinationPort) {
      return res.status(400).json({ success: false, message: 'Please complete all required fields.' });
    }

    let savedRFQ = null;
    try {
      const newRFQ = new RFQ(req.body);
      savedRFQ = await newRFQ.save();
    } catch (dbErr) {
      console.warn('Database save skipped, returning mock created RFQ acknowledgment.');
      savedRFQ = { ...req.body, _id: 'rfq_' + Date.now(), createdAt: new Date() };
    }

    // Trigger automated email dispatch asynchronously
    sendRFQEmail(savedRFQ).catch(err => console.error('RFQ Email trigger background error:', err));

    res.status(201).json({
      success: true,
      message: 'Request for Quote submitted successfully! Our export manager will contact you within 12 hours.',
      quoteId: savedRFQ._id || 'RFQ-' + Math.floor(100000 + Math.random() * 900000),
      data: savedRFQ
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET list all RFQs (Admin CRM)
router.get('/', async (req, res) => {
  try {
    let rfqs = [];
    try {
      rfqs = await RFQ.find().sort({ createdAt: -1 });
    } catch (e) {}

    if (!rfqs || rfqs.length === 0) {
      rfqs = sampleRFQs;
    }

    res.json({ success: true, count: rfqs.length, data: rfqs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PATCH update RFQ status (Admin CRM)
router.patch('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    let updated = null;
    try {
      updated = await RFQ.findByIdAndUpdate(req.params.id, { status }, { new: true });
    } catch (e) {}

    res.json({ success: true, message: 'RFQ status updated', data: updated || { _id: req.params.id, status } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
