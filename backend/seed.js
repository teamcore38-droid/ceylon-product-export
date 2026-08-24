const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const RFQ = require('./models/RFQ');
const Blog = require('./models/Blog');
const { sampleProducts, sampleRFQs, sampleBlogs } = require('./data/mockData');

dotenv.config();

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/king_coconut_export', {
      serverSelectionTimeoutMS: 3000
    });
    console.log('[Seed] Connected to MongoDB...');

    await Product.deleteMany({});
    await RFQ.deleteMany({});
    await Blog.deleteMany({});

    await Product.insertMany(sampleProducts);
    await RFQ.insertMany(sampleRFQs);
    await Blog.insertMany(sampleBlogs);

    console.log('✅ [Seed Success] Products, RFQs, and Blog articles seeded into database!');
    process.exit(0);
  } catch (error) {
    console.warn('⚠️ [Seed Note] Database seeding skipped (Local MongoDB offline or restricted). Backend will use mock data fallback seamlessly.');
    process.exit(0);
  }
};

seedDB();
