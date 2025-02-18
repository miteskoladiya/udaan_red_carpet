"use client";
import { useUser } from "@clerk/nextjs";
import Hero from "@/components/Hero";
import { AppleCardsCarouselDemo2 } from "@/components/Applehome";
import { useEffect } from "react";

export default function Home() {
  const { user, isLoaded, isSignedIn } = useUser();

  // ✅ Keep ALL hooks unconditionally at the top
  useEffect(() => {
    if (isSignedIn) {
      sendUserEmail(user.primaryEmailAddress?.emailAddress);
    }
  }, [isSignedIn, user?.primaryEmailAddress?.emailAddress]); // ✅ Add proper dependencies

  // ✅ Move conditional return AFTER hooks
  if (!isLoaded) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  const sendUserEmail = async (email) => {
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      console.log("Server Response:", data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Hero />
      <AppleCardsCarouselDemo2 />
    </div>
  );
}