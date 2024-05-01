import mongoose from "mongoose";

const connectDB = async (url) => {
    try {
      const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
      await mongoose.connect(url, connectionParams);
      console.log('MongoDB connection successful');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1); // Exit process with failure
    }
  };
  
  export default connectDB;