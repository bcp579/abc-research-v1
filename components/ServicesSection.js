'use client';

// FIX: Added this import for all icons used in this component
import { Feather, Globe, Server, Database, Bot, ShieldCheck } from 'lucide-react';

export default function ServicesSection () {
  const services = [
    { icon: <Feather size={32} />, title: "Custom Software Development", description: "Bespoke software solutions tailored to your specific business needs and goals." },
    { icon: <Globe size={32} />, title: "Web Application Development", description: "Modern, scalable, and secure web apps that deliver exceptional user experiences." },
    { icon: <Server size={32} />, title: "Cloud & DevOps Solutions", description: "Optimize your infrastructure with our cloud migration, management, and DevOps services." },
    { icon: <Database size={32} />, title: "Data Analytics & BI", description: "Turn your data into actionable insights with our business intelligence solutions." },
    { icon: <Bot size={32} />, title: "AI & Machine Learning", description: "Integrate intelligent automation and predictive analysis into your operations." },
    { icon: <ShieldCheck size={32} />, title: "Cybersecurity Services", description: "Protect your digital assets with our comprehensive security assessments and solutions." },
  ];

  return (
    <section 
    id="services" 
    className="bg-gray-50 py-20 md:py-28 flex item-center"
    style={{ minHeight: 'calc(100vh - 80px)' }} 
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="text-lg text-gray-600 mt-2">We offer a wide range of IT services to power your success.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};