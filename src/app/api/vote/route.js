import { Nominee, User } from "@/model/User";
import connectDB from "@/lib/db";

export async function POST(req) {
  try {
    const body = await req.json();

    // Validation
    if (!body?.actualvalues?.length === 9 || !body?.email) {
      return new Response(
        JSON.stringify({ error: "Invalid request format!" }),
        { status: 400 }
      );
    }

    await connectDB();

    const { actualvalues, email } = body;

    // Atomic operation: Find or create user
    let user = await User.findOneAndUpdate(
      { email },
      { $setOnInsert: { email, isVoted: false } }, // Initial values
      { 
        new: true,
        upsert: true, // Create if doesn't exist
        runValidators: true 
      }
    );

    // Check voting status
    if (user.isVoted) {
      return new Response(
        JSON.stringify({ error: "Already voted!" }),
        { status: 403 }
      );
    }

    // Atomic vote recording
    const [voteUpdate, userUpdate] = await Promise.all([
      Nominee.updateMany(
        { id: { $in: actualvalues } },
        { $inc: { votes: 1 } }
      ),
      User.updateOne(
        { email },
        { $set: { isVoted: true } }
      )
    ]);

    return new Response(
      JSON.stringify({ message: "Vote recorded!" }),
      { status: 200 }
    );

  } catch (error) {
    console.error("Voting Error:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Voting failed",
        details: error.errors 
      }),
      { status: 500 }
    );
  }
}