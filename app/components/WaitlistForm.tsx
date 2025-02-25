"use client";

import { useState, useEffect } from "react";
import axios from "axios";


const courses = [
  { id: 1, title: "Full-Stack Web Development" },
  { id: 2, title: "Data Science & Machine Learning" },
  { id: 3, title: "UI/UX Design Fundamentals" },
  { id: 4, title: "Cybersecurity Essentials" },
  { id: 5, title: "Cloud Computing with AWS and Azure" },
  { id: 6, title: "Mobile App Development" },
  { id: 7, title: "Blockchain Development" },
  { id: 8, title: "Artificial Intelligence Foundations" },
];

const WaitlistForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: "", email: "", course: "" });
      setMessage("");
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("/api/waitlist", formData);
      setMessage(response.data.message);
    } catch {
      setMessage("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>

        {/* Form Title */}
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Join the Waitlist
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name Input */}
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900"
              required
            />
          </div>

          {/* Course Selection Dropdown */}
          <div className="relative">
            <label className="block text-gray-700 font-medium">Preferred Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900 appearance-none"
              required
            >
              <option value="" disabled>Select your course</option>
              {courses.map((course) => (
                <option key={course.id} value={course.title}>
                  {course.title}
                </option>
              ))}
            </select>

            {/* Arrow Icon to fix overflow issue */}
            <div className="absolute right-3 top-10 text-gray-500 pointer-events-none">
              ▼
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Join Waitlist"}
          </button>
        </form>

        {/* Success/Error Message */}
        {message && (
          <p className="mt-4 text-center font-medium text-green-600">{message}</p>
        )}
      </div>
    </div>
  );
};

export default WaitlistForm;
