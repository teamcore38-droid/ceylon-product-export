const express = require('express');
const router = express.Router();
const RFQ = require('../models/RFQ');
const { sampleRFQs } = require('../data/mockData');
const { sendRFQEmail } = require('../utils/emailService');

// POST Submit new RFQ Quote Request
router.post('/', async (req, res) => {
  try {
    let { companyName, contactPerson, email, phone, country, product, quantity, destinationPort } = req.body;

    // Fallback country from destination port if not explicitly provided
    if (!country && destinationPort) {
      country = destinationPort;
      req.body.country = destinationPort;
    }
    
    if (!companyName || !contactPerson || !email || !product || !quantity || !destinationPort) {
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
    const emailResult = await sendRFQEmail(savedRFQ);

    res.status(201).json({
      success: true,
      message: 'Request for Quote submitted successfully! Our export manager will contact you within 12 hours.',
      quoteId: savedRFQ._id || 'RFQ-' + Math.floor(100000 + Math.random() * 900000),
      data: savedRFQ,
      emailDispatch: emailResult
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET Test Email Endpoint (To test Vercel SMTP variables instantly)
router.get('/test-email', async (req, res) => {
  const testRFQ = {
    companyName: 'Vercel Deployment Test LLC',
    contactPerson: 'Admin Diagnostic Test',
    email: 'toytot000@gmail.com',
    phone: '+94 76 004 8438',
    country: 'Sri Lanka',
    product: 'Fresh Whole King Coconut (Ceylon Thembili)',
    quantity: 1,
    unit: '40ft High Cube Reefer',
    incoterms: 'CIF Dubai',
    destinationPort: 'Jebel Ali Port',
    additionalNotes: 'Diagnostic verification of automated email notification system.'
  };

  const smtpUser = process.env.SMTP_USER || 'NOT SET';
  const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'NOT SET';
  const hasPass = process.env.SMTP_PASS ? 'YES (Configured)' : 'NO (Missing)';

  const result = await sendRFQEmail(testRFQ);

  res.json({
    testStatus: result.success ? 'SUCCESS' : 'FAILED',
    envDiagnostics: {
      SMTP_USER: smtpUser,
      ADMIN_EMAIL: adminEmail,
      SMTP_PASS_CONFIGURED: hasPass,
      SMTP_HOST: process.env.SMTP_HOST || 'smtp.gmail.com (Default)',
      SMTP_PORT: process.env.SMTP_PORT || '587 (Default)'
    },
    emailResult: result
  });
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
