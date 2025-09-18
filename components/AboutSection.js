'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section 
    id="about" 
    className="py-20 md:py-28 flex item-center w-full"
    style={{ minHeight: 'calc(100vh - 80px)' }} 
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
            <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Team" 
                width={1200}  
                height={800}
                className="rounded-lg shadow-2xl w-full"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/e2e8f0/4a5568?text=Our+Team'; e.currentTarget.onerror = null; }}
            />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About ABC Research</h2>
          <p className="text-gray-600 mb-4">
            Founded on the principle of innovation, ABC Research has been a trusted partner for businesses seeking to leverage technology for growth and efficiency. Our team of experts is dedicated to understanding your unique challenges and delivering tailored solutions that drive results.
          </p>
          <p className="text-gray-600 mb-6">
            We believe in building long-term partnerships with our clients, grounded in trust, transparency, and a shared vision for success. From startups to enterprise-level corporations, we provide the strategic guidance and technical expertise to navigate the complexities of the digital age.
          </p>
          <a href="#contact" className="text-blue-600 font-semibold hover:underline">
            Learn More About Our Mission <ArrowRight className="inline-block ml-1" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};