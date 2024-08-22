import React from "react";
import Link from "next/link";

export default function ThankYouMessage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue via-purple-500 to-cyan-500 text-white p-8">
      <div className="bg-light_gray text-blue rounded-lg shadow-lg p-10 text-center max-w-md">
        <h1 className="text-4xl font-poppins font-bold mb-4">Thank You!</h1>
        <h3 className="text-xl font-poppins font-medium mb-6">We appreciate you reaching out to us.</h3>
        <p className="text-lg font-poppins">One of our team members will get back to you within 1-2 business days.</p>
        <p className="mt-4 font-poppins">
          In the meantime, feel free to explore our{" "}
          <Link href="/" className="text-red">homepage</Link>{" "}
          or check out what we are all{" "}
          <Link href="/about" className="text-red">about</Link>
        </p>
      </div>
    </div>
  );
}
