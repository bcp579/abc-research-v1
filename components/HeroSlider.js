'use client';

import React, { useCallback, useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

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
  // 1. Added 'duration: 600' for slower transition (default is 25)
  // 2. Removed 'loop: true' to ensure it always starts at 1 and stays logical
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    duration: 40 
  });
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  // Function to start/reset the 5-second timer
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      if (emblaApi) {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0); // Go back to start if at the end
        }
      }
    }, 6000);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      startTimer(); // Reset timer on click
    }
  }, [emblaApi, startTimer]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      startTimer(); // Reset timer on click
    }
  }, [emblaApi, startTimer]);

  // Reset to slide 1 (index 0) every time the component mounts (user comes back)
  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(0, true); // 'true' jumps without animation
      startTimer();
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [emblaApi, startTimer]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <div className="relative w-full overflow-hidden" id="hero">
      <div className="bg-blue-50" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div className="flex-[0_0_100%] min-w-0" key={index}>
              <div className="container mx-auto px-6 py-16 md:py-24" style={{ minHeight: 'calc(100vh - 80px)' }}>
                <div className="flex flex-col md:flex-row items-center gap-12">
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
                  <div className="md:w-1/2">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={1200}  
                      height={800}
                      priority={index === 0} // Load first slide image immediately
                      className="rounded-lg shadow-2xl w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
        <button
          className="bg-white/50 text-gray-800 p-2 rounded-full hover:bg-white/80 transition-colors"
          onClick={scrollPrev}
        >
          <ArrowLeft size={20} />
        </button>
        
        <div className="flex items-center gap-2">
            {slides.map((_, index) => (
                <button 
                    key={index} 
                    onClick={() => {
                        emblaApi?.scrollTo(index);
                        startTimer();
                    }}
                    className={`w-2 h-2 rounded-full transition-colors duration-500 ${index === currentSlide ? 'bg-blue-600 w-4' : 'bg-gray-400'}`}
                />
            ))}
        </div>

        <button
          className="bg-white/50 text-gray-800 p-2 rounded-full hover:bg-white/80 transition-colors"
          onClick={scrollNext}
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}