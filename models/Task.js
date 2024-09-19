const connectDB = require('../config/db');

async function getTaskCollection() {
  const db = await connectDB();
  return db.collection('QumvaTasks');
}

module.exports = { getTaskCollection };
