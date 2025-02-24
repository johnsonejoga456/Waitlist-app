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
    {
        id: 4,
        title: "Cybersecurity Essentials",
        description: "Learn how to protect systems and networks from cyber threats.",
        features: ["Ethical Hacking", "Network Security", "Incident Response"],
        duration: "10 Weeks",
      },
      {
        id: 5,
        title: "Cloud Computing with AWS and Azure",
        description: "Master cloud services, deployments, and infrastructure management.",
        features: ["AWS & Azure Platforms", "Serverless Computing", "Scalable Deployments"],
        duration: "8 Weeks",
      },
      {
        id: 6,
        title: "Mobile App Development",
        description: "Build cross-platform mobile apps with modern tools and frameworks.",
        features: ["React Native & Flutter", "UI/UX for Mobile", "App Store Deployment"],
        duration: "10 Weeks",
      },
      {
        id: 7,
        title: "Blockchain Development",
        description: "Dive into blockchain networks and create decentralized applications (DApps).",
        features: ["Solidity, Ethereum, Hyperledger", "Smart Contracts", "Web3 Integration"],
        duration: "12 Weeks",
      },
      {
        id: 8,
        title: "Artificial Intelligence Foundations",
        description: "Explore the basics of AI, neural networks, and deep learning.",
        features: ["TensorFlow & PyTorch", "AI Problem Solving", "Build Simple AI Models"],
        duration: "9 Weeks",
      },
  ];
  
  export default function Courses({ openModal }: { openModal: () => void }) {
    return (
      <section id="courses" className="py-24 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Courses</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Explore a variety of courses designed to help you upskill and grow.
        </p>
  
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="bg-blue-600 text-white text-left p-6">
                <h3 className="text-2xl font-semibold">{course.title}</h3>
                <p className="text-sm mt-2">⏳ {course.duration}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{course.description}</p>
                <ul className="text-left text-gray-600 space-y-2">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500">✔️</span>
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openModal}
                  className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Join the Waitlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  