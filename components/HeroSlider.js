
'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

// Using local images is the most reliable method.
// Make sure these filenames match the files in your /public folder.
const slides = [
  {
    image: '/slide-1.webp',
    title: 'AI & Machine Learning Solutions',
    description: 'Transform your business with our expertise in custom LLM models, NLP, computer vision, and predictive analytics.',
    ctaText: 'Explore AI Services',
    ctaLink: '/offerings/ai-ml',
  },
  {
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop',
    title: 'Custom Software Development',
    description: 'We build bespoke software solutions tailored to your specific business needs, from initial concept to final deployment.',
    ctaText: 'Our Process',
    ctaLink: '/offerings/digital-transformation',
  },
  {
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    title: 'Cloud & DevOps Services',
    description: 'Optimize your infrastructure with our comprehensive cloud migration, management, and automation services.',
    ctaText: 'See Cloud Solutions',
    ctaLink: '/offerings/cloud-services',
  },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [emblaApi]);
  
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <div 
    className="relative w-full bg-blue-50 flex item-center" 
    style={{ minHeight: 'calc(100vh - 80px)' }} 
    ref={emblaRef}
    >
      <div className="flex">
        {slides.map((slide, index) => (
          // Each slide is now a flex container
          <div className="flex-[0_0_100%] min-w-0" key={index}>
            <div className="container mx-auto px-6 py-16 md:py-24">
              <div className="flex flex-col md:flex-row items-center gap-12">
                
                {/* Text Content Column */}
                <div className="md:w-1/2 text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 mb-8">
                    {slide.description}
                  </p>
                  <a
                    href={slide.ctaLink}
                    className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105 inline-block"
                  >
                    {slide.ctaText}
                  </a>
                </div>

                {/* Image Column */}
                <div className="md:w-1/2">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={1200}  
                    height={800}
                    className="rounded-lg shadow-2xl w-full h-auto object-cover"
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/e2e8f0/4a5568?text=Image+Not+Found'; e.currentTarget.onerror = null; }}
                  />
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons and Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
        <button
          className="bg-white/50 text-gray-800 p-2 rounded-full hover:bg-white/80 transition-colors"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <ArrowLeft size={20} />
        </button>
        
        <div className="flex items-center gap-2">
            {slides.map((_, index) => (
                <button 
                    key={index} 
                    onClick={() => emblaApi && emblaApi.scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-400'}`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>

        <button
          className="bg-white/50 text-gray-800 p-2 rounded-full hover:bg-white/80 transition-colors"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
