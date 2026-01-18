'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  backgroundGradient: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "Premium Electronics",
    subtitle: "Cutting-Edge Technology",
    description: "Discover cutting-edge technology and premium accessories crafted for the modern lifestyle",
    primaryCTA: {
      text: "Explore Collection",
      href: "/items"
    },
    secondaryCTA: {
      text: "Member Access",
      href: "/login"
    },
    backgroundGradient: "from-slate-900 via-blue-900 to-slate-800"
  },
  {
    id: 2,
    title: "Smart Wearables",
    subtitle: "Health & Fitness Tracking",
    description: "Advanced smartwatches and fitness trackers with comprehensive health monitoring and GPS tracking",
    primaryCTA: {
      text: "Shop Wearables",
      href: "/items?category=wearables"
    },
    secondaryCTA: {
      text: "Learn More",
      href: "/items"
    },
    backgroundGradient: "from-emerald-900 via-teal-900 to-slate-800"
  },
  {
    id: 3,
    title: "Audio Excellence",
    subtitle: "Premium Sound Experience",
    description: "Professional-grade headphones and speakers with active noise cancellation and studio-quality sound",
    primaryCTA: {
      text: "Shop Audio",
      href: "/items?category=audio"
    },
    secondaryCTA: {
      text: "View All",
      href: "/items"
    },
    backgroundGradient: "from-purple-900 via-indigo-900 to-slate-800"
  },
  {
    id: 4,
    title: "Tech Accessories",
    subtitle: "Productivity Essentials",
    description: "Ergonomic accessories and high-performance peripherals to optimize your workspace and boost productivity",
    primaryCTA: {
      text: "Shop Accessories",
      href: "/items?category=accessories"
    },
    secondaryCTA: {
      text: "Discover More",
      href: "/items"
    },
    backgroundGradient: "from-orange-900 via-red-900 to-slate-800"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Carousel Container */}
      <div className="relative h-screen min-h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
            }`}
          >
            {/* Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.backgroundGradient}`}>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 h-full flex items-center">
              <div className="text-center w-full">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium border border-white/20">
                    {slide.subtitle}
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-slate-200 leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href={slide.primaryCTA.href}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    {slide.primaryCTA.text}
                  </Link>
                  <Link
                    href={slide.secondaryCTA.href}
                    className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white/10"
                  >
                    {slide.secondaryCTA.text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>

      {/* Auto-play Indicator */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isAutoPlaying 
              ? 'bg-green-500/20 text-green-400 border border-green-400/30' 
              : 'bg-red-500/20 text-red-400 border border-red-400/30'
          }`}
          aria-label={isAutoPlaying ? 'Pause autoplay' : 'Resume autoplay'}
        >
          {isAutoPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}