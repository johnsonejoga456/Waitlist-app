"use client";
import { useEffect, useState } from "react";

export default function Header() {
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
  );
}
