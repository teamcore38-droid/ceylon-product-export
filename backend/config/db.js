const mongoose = require('mongoose');

let isConnected = false;
let connectionAttempt = null;
let lastConnectionFailure = 0;

// Do not start a new slow database handshake for every API request. This is
// especially important when the API is using the mock data fallback.
const RETRY_DELAY_MS = 30_000;

const connectDB = async () => {
  if (isConnected || mongoose.connection.readyState >= 1) {
    return;
  }

  // A local/dev install can intentionally run without MongoDB. Avoid the
  // default four-second wait in that case and let routes serve mock data.
  if (!process.env.MONGO_URI) {
    return;
  }

  if (connectionAttempt) {
    return connectionAttempt;
  }

  if (Date.now() - lastConnectionFailure < RETRY_DELAY_MS) {
    return;
  }

  connectionAttempt = mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 1500,
      bufferCommands: false
    }).then((conn) => {
    isConnected = true;
    console.log(`[MongoDB Cloud] Connected: ${conn.connection.host}`);
  }).catch((error) => {
    lastConnectionFailure = Date.now();
    console.warn(`[MongoDB Notice] Connection warning (${error.message}). Serverless routes using fallback dataset.`);
  }).finally(() => {
    connectionAttempt = null;
  });

  return connectionAttempt;
};

module.exports = connectDB;
