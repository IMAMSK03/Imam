import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout"; // Import Layout component
 


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Showcasing my work and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Layout>{children}</Layout> {/* Wrap pages inside Layout */}
      </body>
    </html>
  );
}
