import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Red Carpet Awards",
  description: "The Red Carpet Awards is a celebration of the best in film.",
};

export default function RootLayout({ children }) {
  
  return (
    <ClerkProvider frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}>
      <html lang="en">
        <body>
          <Navbar />
          <Toaster position="top-center" />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
