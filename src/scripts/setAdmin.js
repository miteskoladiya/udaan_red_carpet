// src/scripts/setAdmin.js
import connectDB from '../lib/db';
import { User } from '../model/User';

async function setAdmin(clerkId) {
  try {
    await connectDB();
    await User.findOneAndUpdate(
      { clerkId },
      { isAdmin: true },
      { upsert: true }
    );
    console.log('Admin user set successfully');
  } catch (error) {
    console.error('Error setting admin:', error);
  }
}

// Usage: node setAdmin.js <clerkId>
const clerkId = process.argv[2];
if (!clerkId) {
  console.error('Please provide a Clerk user ID');
  process.exit(1);
}

setAdmin(clerkId);