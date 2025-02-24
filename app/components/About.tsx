export default function About() {
    return (
      <section
        id="about"
        className="py-24 text-center bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800"
      >
        <h2 className="text-5xl font-bold text-blue-700 font-sans">About Us</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4 font-light">
          We are committed to providing high-quality education to help students grow their careers.
          Our courses focus on hands-on experience and industry-relevant skills.
        </p>
  
        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
          <div className="p-8 bg-white shadow-lg rounded-xl hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 flex items-center justify-center gap-2">
              🌍 5+ Years of Experience
            </h3>
            <p className="text-gray-600 mt-3 font-medium">
              Training professionals with up-to-date curriculum.
            </p>
          </div>
  
          <div className="p-8 bg-white shadow-lg rounded-xl hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 flex items-center justify-center gap-2">
              🎓 10,000+ Students Trained
            </h3>
            <p className="text-gray-600 mt-3 font-medium">
              Our alumni work at top companies worldwide.
            </p>
          </div>
  
          <div className="p-8 bg-white shadow-lg rounded-xl hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 flex items-center justify-center gap-2">
              💡 Hands-on Learning
            </h3>
            <p className="text-gray-600 mt-3 font-medium">
              We focus on real-world projects and practical applications.
            </p>
          </div>
        </div>
      </section>
    );
  }
  