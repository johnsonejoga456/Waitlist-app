export default function Hero({ openModal }: { openModal: () => void }) {
    return (
      <section
        id="home"
        className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-cover bg-center text-white relative"
        style={{
          backgroundImage: "url('/images/waitlist 1.jpg')",
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/50"></div>
  
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-6">Welcome to Our Course Waitlist</h1>
          <p className="text-lg max-w-lg mb-4">
            Sign up now to get notified when enrollment opens for our next cohort!
          </p>
          <button
            onClick={openModal}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition"
          >
            Join the Waitlist
          </button>
        </div>
      </section>
    );
  }
  