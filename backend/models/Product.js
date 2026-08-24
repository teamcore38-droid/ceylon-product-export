const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true, enum: ['King Coconut', 'Green Papaya', 'Tapioca'] },
  badge: { type: String, default: 'Export Grade' },
  shortDescription: { type: String, required: true },
  fullDescription: { type: String, required: true },
  brix: { type: String },
  origin: { type: String, default: 'Kurunegala & Gampaha, Sri Lanka' },
  shelfLife: { type: String, default: '28-35 Days in Cold Chain' },
  temperature: { type: String, default: '12°C - 14°C (Controlled Reefer)' },
  specs: [
    {
      key: { type: String },
      value: { type: String }
    }
  ],
  nutritionalHighlights: [
    {
      nutrient: { type: String },
      amount: { type: String },
      unit: { type: String },
      benefit: { type: String }
    }
  ],
  packaging: [
    {
      type: { type: String },
      capacity: { type: String },
      weight: { type: String },
      dimensions: { type: String }
    }
  ],
  containerLoading: [
    {
      containerType: { type: String },
      cartonCount: { type: String },
      grossWeight: { type: String },
      netWeight: { type: String }
    }
  ],
  uses: [{ type: String }],
  images: [{ type: String }],
  isFeatured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
