import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
        Have questions? Reach out to us, and we’ll be happy to help.
      </p>

      {/* Contact Details */}
      <div className="mt-10 max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6">
        <div className="flex items-center space-x-4">
          <MapPinIcon className="w-6 h-6 text-blue-600" />
          <p className="text-lg text-gray-700">123 Learning Street, Tech City, TX 75001, USA</p>
        </div>
        <div className="flex items-center space-x-4">
          <EnvelopeIcon className="w-6 h-6 text-red-500" />
          <a href="mailto:support@coursewaitlist.com" className="text-lg text-blue-600 hover:underline">
            support@coursewaitlist.com
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-4">
            <PhoneIcon className="w-6 h-6 text-green-500" />
            <p className="text-lg text-gray-700">+1 (555) 123-4567</p>
          </div>
          <div className="flex items-center space-x-4">
            <PhoneIcon className="w-6 h-6 text-green-500" />
            <p className="text-lg text-gray-700">+1 (555) 987-6543</p>
          </div>
          <div className="flex items-center space-x-4">
            <PhoneIcon className="w-6 h-6 text-green-500" />
            <p className="text-lg text-gray-700">+1 (555) 789-0123</p>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 text-3xl transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-3xl transition"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700 text-3xl transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 text-3xl transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
