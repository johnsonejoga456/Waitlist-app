import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-blue-50 to-blue-100 text-center"
    >
      <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-4">
        Have questions? Reach out to us, and we’ll be happy to help.
      </p>

      {/* Contact Details */}
      <div className="mt-10 max-w-lg mx-auto bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-8 space-y-6 border border-gray-200">
        <div className="flex items-center space-x-4">
          <MapPinIcon className="w-7 h-7 text-blue-600" />
          <p className="text-lg text-gray-800 font-medium">
            123 Learning Street, Tech City, TX 75001, USA
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <EnvelopeIcon className="w-7 h-7 text-red-500" />
          <a
            href="mailto:support@coursewaitlist.com"
            className="text-lg text-blue-600 font-medium hover:underline"
          >
            support@coursewaitlist.com
          </a>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-4">
            <PhoneIcon className="w-7 h-7 text-green-500" />
            <p className="text-lg text-gray-800 font-medium">+1 (555) 123-4567</p>
          </div>
          <div className="flex items-center space-x-4">
            <PhoneIcon className="w-7 h-7 text-green-500" />
            <p className="text-lg text-gray-800 font-medium">+1 (555) 987-6543</p>
          </div>
          <div className="flex items-center space-x-4">
            <PhoneIcon className="w-7 h-7 text-green-500" />
            <p className="text-lg text-gray-800 font-medium">+1 (555) 789-0123</p>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-500 hover:bg-blue-600 p-3 rounded-full text-2xl transition shadow-lg"
        >
          <FaTwitter />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-2xl transition shadow-lg"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-pink-500 hover:bg-pink-600 p-3 rounded-full text-2xl transition shadow-lg"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-700 hover:bg-blue-800 p-3 rounded-full text-2xl transition shadow-lg"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
