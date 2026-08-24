const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  if (isConnected || mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/king_coconut_export', {
      serverSelectionTimeoutMS: 4000,
      bufferCommands: false
    });
    isConnected = true;
    console.log(`[MongoDB Cloud] Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`[MongoDB Notice] Connection warning (${error.message}). Serverless routes using fallback dataset.`);
  }
};

module.exports = connectDB;
