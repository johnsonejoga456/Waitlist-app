"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex gap-8 text-lg font-semibold text-white">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-blue-600 text-white flex flex-col items-center">
          {["courses", "about", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => {
                scrollToSection(section);
                setIsOpen(false); // Close menu after selection
              }}
              className="py-4 border-b border-white transition-all duration-300 hover:bg-blue-700 w-full text-left"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}