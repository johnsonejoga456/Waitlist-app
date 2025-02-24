"use client";

import { useState, useEffect } from "react";
import WaitlistForm from "./components/WaitlistForm";

const courses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "Master frontend and backend development using modern technologies.",
    features: ["React, Node.js, MongoDB", "Hands-on projects", "Expert mentorship"],
    duration: "12 Weeks",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    description: "Learn data analysis, visualization, and machine learning algorithms.",
    features: ["Python, Pandas, Scikit-Learn", "Real-world datasets", "Industry case studies"],
    duration: "10 Weeks",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    description: "Create stunning user experiences with design thinking principles.",
    features: ["Figma & Adobe XD", "Wireframing & Prototyping", "Usability Testing"],
    duration: "8 Weeks",
  },
];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">CourseWaitlist</h1>
          <nav className="flex gap-6">
            <button onClick={() => scrollToSection("courses")} className="hover:text-blue-600 transition">
              Courses
            </button>
            <button onClick={() => scrollToSection("about")} className="hover:text-blue-600 transition">
              About Us
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-blue-600 transition">
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-5xl font-bold mb-6">Welcome to Our Course Waitlist</h1>
        <p className="text-lg max-w-lg mb-4">
          Sign up now to get notified when enrollment opens for our next cohort!
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition"
        >
          Join the Waitlist
        </button>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Courses</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Explore a variety of courses designed to help you upskill and grow.
        </p>
        
        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-700">{course.title}</h3>
              <p className="text-gray-600 my-3">{course.description}</p>
              <ul className="text-left text-gray-600">
                {course.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    ✅ <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mt-3">⏳ {course.duration}</p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Join the Waitlist
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 text-center bg-white">
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          We are dedicated to providing top-quality education and helping students reach their goals.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Have questions? Reach out to us, and we’ll be happy to help.
        </p>
      </section>

      {/* Waitlist Form Modal */}
      <WaitlistForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
