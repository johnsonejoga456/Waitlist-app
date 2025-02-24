"use client";

import { useState } from "react";
import WaitlistForm from "./components/WaitlistForm";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
        Welcome to Our Course Waitlist
      </h1>
      <p className="text-lg text-gray-600 text-center mb-4 max-w-lg">
        Sign up now to get notified when enrollment opens for our next cohort!
      </p>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        Join the Waitlist
      </button>

      {/* Waitlist Form Modal */}
      <WaitlistForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
