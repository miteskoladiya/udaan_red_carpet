import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env.DATABASE_URL;

if (!process.env.DATABASE_URL) {
  throw new Error("Please define the DATABASE_URL environment variable ");
}

// Prevent multiple connections in development (for Next.js)
let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected.");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);

    isConnected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Stop the process if connection fails
  }
};

export default connectDB;
