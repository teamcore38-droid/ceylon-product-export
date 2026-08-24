const mongoose = require('mongoose');

const rfqSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  contactPerson: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String, required: true },
  product: { type: String, required: true },
  productCategory: { type: String, enum: ['King Coconut', 'Green Papaya', 'Tapioca', 'Multiple / Mixed Container'] },
  quantity: { type: Number, required: true },
  unit: { type: String, default: 'Cartons (12 Nuts / Boxes)' },
  packagingType: { type: String, default: 'Standard Corrugated Export Cartons' },
  incoterms: { type: String, default: 'FOB Colombo Port' },
  destinationPort: { type: String, required: true },
  targetDeliveryDate: { type: String },
  additionalNotes: { type: String },
  status: { type: String, enum: ['New Lead', 'Under Review', 'Quoted', 'Sample Dispatched', 'Closed Won', 'Closed Lost'], default: 'New Lead' }
}, { timestamps: true });

module.exports = mongoose.model('RFQ', rfqSchema);
