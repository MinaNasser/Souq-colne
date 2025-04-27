const mongoose = require('mongoose');

async function db_connect() {
  try {
    await mongoose.connect(process.env.db_application);
    console.log("\x1b[32m%s\x1b[0m", "Database connected successfully");
  } catch (error) {
    console.error("\x1b[31m%s\x1b[0m", "Database connection failed", error);
    process.exit(1); 
  }
}

module.exports = db_connect;
