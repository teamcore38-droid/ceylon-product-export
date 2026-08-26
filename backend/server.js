const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Start the database connection without blocking the request. Routes already
// handle database errors by serving the fallback dataset, so a slow/unavailable
// MongoDB must not make the whole site appear stuck on loading.
app.use((req, res, next) => {
  connectDB().catch(() => {});
  next();
});

// Security & Parsing Middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/rfq', require('./routes/rfqRoutes'));
app.use('/api/blogs', require('./routes/blogRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    platform: 'Vercel Serverless / Node.js',
    service: 'Ceylon King Coconut & Produce Export API Server',
    timestamp: new Date()
  });
});

// Standalone listener for local dev mode
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 [Backend Server] Running on http://localhost:${PORT}`);
  });
}

module.exports = app;
