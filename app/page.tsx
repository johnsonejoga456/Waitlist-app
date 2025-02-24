"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import About from "./components/About";
import Contact from "./components/Contact";
import WaitlistForm from "./components/WaitlistForm";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="font-sans text-gray-900">
      <Header />
      <Hero openModal={() => setIsModalOpen(true)} />
      <Courses openModal={() => setIsModalOpen(true)} />
      <About />
      <Contact />
      <WaitlistForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}