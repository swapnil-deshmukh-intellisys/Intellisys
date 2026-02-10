const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // eslint-disable-next-line no-console
    console.log("Connecting to MongoDB...");
    
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/intellisys', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    // eslint-disable-next-line no-console
    console.log("MongoDB connected successfully");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = { connectDB };
