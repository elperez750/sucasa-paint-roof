import "./globals.css";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});
type RootLayoutProps = {
  children: React.ReactNode; // This allows any valid React child
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    // Attach CSS variables to HTML
    <html lang="en" className={`${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
