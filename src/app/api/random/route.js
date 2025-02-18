export async function POST(req) {
    try {
      const { email } = await req.json();
  
      if (!email) {
        return new Response(
          JSON.stringify({ error: "Email is required!" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
  
      console.log("User Email:", email); // Print email in the server logs
  
      return new Response(
        JSON.stringify({ message: "Email received successfully!" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
  
    } catch (error) {
      console.error("Error:", error);
      return new Response(
        JSON.stringify({ error: "Something went wrong!" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
  