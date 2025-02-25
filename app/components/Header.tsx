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
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-blue-700 shadow-lg" : "bg-blue-600"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-white tracking-wide">
          Course<span className="text-yellow-300">Waitlist</span>
        </h1>

        {/* Navigation */}
        <nav className="flex gap-8 text-lg font-semibold text-white">
          {["courses", "about", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="transition-all duration-300 hover:text-yellow-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
