import Image from 'next/image';

export default function AboutUsPage() {
  const projects = [
    {
      title: "Project 1: AI-Assisted MRI Positioning",
      description: "A real-time AI system that helps technologists optimize patient positioning during MRI scans, providing instant feedback to improve visualization, reduce repeat scans, and ensure more reliable diagnoses.",
      image: "/Project1.png" 
    },
    {
      title: "Project 2: Brain-Guided Home Rehabilitation",
      description: "A home-based rehabilitation platform that detects brain activity during imagined movements and delivers guided exercises with adaptive sound stimulation, helping patients stay engaged, track progress, and continue recovery beyond the clinic.",
      image: "/Project2.png"
    },
    {
      title: "Project 3: Intraoral Brain-Sensing Home Rehabilitation",
      description: "A home-based rehabilitation platform that captures brain activity using a discreet intraoral device, ideal for patients whose heads are covered, and delivers guided exercises with adaptive sound stimulation to support consistent recovery from home.",
      image: "/Project3.png"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16 lg:px-20">
      {/* Header Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About Us
        </h1>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-4xl">
          <p>
            <span className="font-semibold text-blue-700">ABC Research Inc.</span> develops 
            intelligent technologies at the intersection of artificial intelligence, 
            biomedical engineering, and clinical science. Our work focuses on creating 
            practical solutions that improve how health conditions are detected, monitored, and treated.
          </p>
          <p>
            We design computational methods, AI-driven systems, and sensing technologies 
            for a wide range of biomedical and clinical applications: from neurorehabilitation 
            and vital monitoring to medical imaging and digital health platforms.
          </p>
          <p className="bg-blue-50 border-l-4 border-blue-600 p-4 italic">
            At ABC Research Inc., we focus on translating AI and advanced computational methods into practical 
            biomedical technologies that can support clinical decision-making, patient monitoring, and personalized care.
          </p>
        </div>
      </section>

      <hr className="my-12 border-gray-200" />

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Projects</h2>
        
        {/* Changed from a multi-column grid to a vertical stack (flex-col) with larger gaps */}
        <div className="flex flex-col gap-12 max-w-4xl">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Image Container on Top */}
              <div className="relative w-full h-64 sm:h-80 md:h-96">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain pt-5 "
                />
              </div>

              {/* Text Content Below Image */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}