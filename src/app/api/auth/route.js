import { User } from "@/model/User";
import connectDB from "@/lib/db";
import bcrypt from "bcryptjs"; // Secure password hashing

export async function POST(req) {
  try {
    // Parse request body
    const { email } = await req.json();

    // Validate required fields
    if (!email ) {
      return new Response(
        JSON.stringify({ error: "All fields are required!" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format!" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Connect to the database
    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    
    if (existingUser ) {
      return new Response(JSON.stringify({ error: "User already exists!" }), {
        status: 409,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Hash the password before saving
    

    // Create new user
    const newUser = new User({
      email,
      
    });

    await newUser.save();

    // Return success response
    return new Response(
      JSON.stringify({
        message: "User registered successfully!",
        user: { id: newUser._id, email: newUser.email },
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
