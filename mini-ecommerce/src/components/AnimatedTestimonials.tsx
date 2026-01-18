'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  initials: string;
  rating: number;
  text: string;
  gradient: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Verified Customer",
    initials: "SJ",
    rating: 5,
    text: "Exceptional quality and lightning-fast delivery. The wireless headphones exceeded my expectations with incredible sound quality and comfort for long listening sessions.",
    gradient: "from-blue-400 to-blue-600"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Verified Customer", 
    initials: "MC",
    rating: 5,
    text: "Outstanding customer service and premium products. My smartwatch has become an essential part of my daily routine with accurate health tracking. Highly recommended!",
    gradient: "from-emerald-400 to-emerald-600"
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Verified Customer",
    initials: "ED", 
    rating: 5,
    text: "Amazing selection and competitive prices. The laptop accessories I purchased have significantly improved my productivity and workspace organization. Will definitely shop again!",
    gradient: "from-purple-400 to-purple-600"
  }
];

const statistics = [
  { number: "50K+", label: "Happy Customers", delay: "2s" },
  { number: "4.9/5", label: "Average Rating", delay: "2.2s" },
  { number: "99%", label: "Satisfaction Rate", delay: "2.4s" },
  { number: "24/7", label: "Customer Support", delay: "2.6s" }
];

export default function AnimatedTestimonials() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Memoize slide directions to prevent recalculation
  const slideDirections = useMemo(() => [
    'translate-x-[-100px] translate-y-[50px]', // Slide from left-bottom
    'translate-y-[-100px]', // Slide from top
    'translate-x-[100px] translate-y-[50px]' // Slide from right-bottom
  ], []);

  // Memoize callbacks to prevent unnecessary re-renders
  const handleMouseEnter = useCallback((index: number) => {
    setHoveredCard(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredCard(null);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate header first
            setTimeout(() => {
              setHeaderVisible(true);
            }, 200);

            // Animate cards with slider effect from different directions
            testimonials.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, 600 + (index * 300)); // Staggered delay for slider effect
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Memoize testimonial cards to prevent unnecessary re-renders
  const testimonialCards = useMemo(() => {
    return testimonials.map((testimonial, index) => {
      const slideDirection = slideDirections[index] || slideDirections[0];
      
      return (
        <div
          key={`testimonial-${testimonial.id}`}
          className={`relative transform transition-all duration-1000 ease-out ${
            visibleCards[index] 
              ? 'translate-x-0 translate-y-0 opacity-100 scale-100' 
              : `${slideDirection} opacity-0 scale-95`
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Card Container with Enhanced Slider Animation */}
          <div className={`bg-slate-50 rounded-2xl p-8 shadow-lg transition-all duration-500 transform ${
            hoveredCard === index 
              ? 'shadow-2xl -translate-y-2 scale-105' 
              : 'hover:shadow-xl hover:-translate-y-1'
          }`}>
            
            {/* Floating Elements with Delayed Animation */}
            <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-500 ${
              visibleCards[index] ? 'opacity-20 animate-pulse' : 'opacity-0 scale-0'
            }`} style={{ transitionDelay: `${600 + (index * 300) + 200}ms` }}></div>
            
            <div className={`absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full transition-all duration-500 ${
              visibleCards[index] ? 'opacity-30 animate-bounce' : 'opacity-0 scale-0'
            }`} style={{ transitionDelay: `${600 + (index * 300) + 400}ms`, animationDelay: '0.5s' }}></div>

            {/* Animated Stars with Slider Effect */}
            <div className="flex mb-6 space-x-1">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <div
                  key={`star-${testimonial.id}-${i}`}
                  className={`transform transition-all duration-500 ease-out ${
                    visibleCards[index] ? 'scale-100 rotate-0 translate-x-0' : 'scale-0 rotate-180 translate-x-[-20px]'
                  }`}
                  style={{ transitionDelay: `${600 + (index * 300) + (i * 100)}ms` }}
                >
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              ))}
            </div>

            {/* Animated Quote with Typewriter Effect */}
            <div className="relative mb-6">
              <div className={`absolute -top-2 -left-2 text-4xl text-blue-200 opacity-50 font-serif transition-all duration-500 ${
                visibleCards[index] ? 'scale-100 rotate-0' : 'scale-0 rotate-[-45deg]'
              }`} style={{ transitionDelay: `${600 + (index * 300) + 300}ms` }}>"</div>
              
              <p className={`text-slate-700 leading-relaxed italic relative z-10 transition-all duration-700 ease-out ${
                visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
              }`} style={{ transitionDelay: `${600 + (index * 300) + 500}ms` }}>
                {testimonial.text}
              </p>
              
              <div className={`absolute -bottom-2 -right-2 text-4xl text-blue-200 opacity-50 font-serif rotate-180 transition-all duration-500 ${
                visibleCards[index] ? 'scale-100 rotate-180' : 'scale-0 rotate-[135deg]'
              }`} style={{ transitionDelay: `${600 + (index * 300) + 700}ms` }}>"</div>
            </div>

            {/* Animated Author with Slide-in Effect */}
            <div className={`flex items-center transition-all duration-700 ease-out ${
              visibleCards[index] ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'
            }`} style={{ transitionDelay: `${600 + (index * 300) + 600}ms` }}>
              
              {/* Animated Avatar with Bounce Effect */}
              <div className={`relative w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold mr-4 transition-all duration-700 ease-out ${
                hoveredCard === index ? 'scale-110 shadow-lg' : ''
              } ${
                visibleCards[index] ? 'scale-100' : 'scale-0'
              }`} style={{ transitionDelay: `${600 + (index * 300) + 800}ms` }}>
                <span className="relative z-10">{testimonial.initials}</span>
                
                {/* Pulsing Ring */}
                {hoveredCard === index && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-full animate-ping opacity-20`}></div>
                )}
              </div>

              <div className={`transition-all duration-500 ${
                visibleCards[index] ? 'translate-x-0 opacity-100' : 'translate-x-[20px] opacity-0'
              }`} style={{ transitionDelay: `${600 + (index * 300) + 900}ms` }}>
                <p className="font-semibold text-slate-900 transition-colors duration-300">
                  {testimonial.name}
                </p>
                <div className="flex items-center space-x-2">
                  <p className="text-slate-500 text-sm">{testimonial.role}</p>
                  <div className={`w-2 h-2 bg-green-400 rounded-full transition-all duration-300 ${
                    visibleCards[index] ? 'animate-pulse scale-100' : 'scale-0'
                  }`} style={{ transitionDelay: `${600 + (index * 300) + 1000}ms` }}></div>
                </div>
              </div>
            </div>

            {/* Hover Glow Effect */}
            {hoveredCard === index && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-2xl opacity-100 transition-opacity duration-500"></div>
            )}
          </div>

          {/* Card Number Badge with Bounce Animation */}
          <div className={`absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg transition-all duration-700 ease-out ${
            visibleCards[index] ? 'scale-100 rotate-0' : 'scale-0 rotate-[-180deg]'
          }`} style={{ transitionDelay: `${600 + (index * 300) + 100}ms` }}>
            {index + 1}
          </div>
        </div>
      );
    });
  }, [visibleCards, hoveredCard, slideDirections, handleMouseEnter, handleMouseLeave]);

  // Memoize statistics to prevent unnecessary re-renders
  const statisticsElements = useMemo(() => {
    return statistics.map((stat, index) => (
      <div 
        key={`stat-${stat.label.replace(/\s+/g, '-').toLowerCase()}`}
        className={`transform transition-all duration-700 ease-out ${
          headerVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-[50px] opacity-0'
        }`}
        style={{ transitionDelay: stat.delay }}
      >
        <div className="text-3xl font-bold text-slate-900 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {stat.number}
        </div>
        <div className="text-slate-600">{stat.label}</div>
      </div>
    ));
  }, [headerVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Header with Slider Effect */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className={`text-4xl font-bold text-slate-900 mb-4 relative transition-all duration-1000 ease-out ${
              headerVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-[-50px] opacity-0 scale-95'
            }`}>
              Trusted by Thousands
              <div className={`absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform origin-left transition-all duration-1000 ease-out ${
                headerVisible ? 'scale-x-100' : 'scale-x-0'
              }`} style={{ transitionDelay: '0.5s' }}></div>
            </h2>
          </div>
          <p className={`text-xl text-slate-600 transition-all duration-1000 ease-out ${
            headerVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-[30px] opacity-0'
          }`} style={{ transitionDelay: '0.3s' }}>
            See what our customers are saying about their experience
          </p>
        </div>

        {/* Animated Testimonial Cards with Slider Effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialCards}
        </div>

        {/* Animated Statistics with Slide-up Effect */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statisticsElements}
          </div>
        </div>
      </div>

      {/* Background Decorations with Animated Entry */}
      <div className={`absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl transition-all duration-1000 ${
        headerVisible ? 'animate-pulse opacity-100 scale-100' : 'opacity-0 scale-0'
      }`} style={{ transitionDelay: '1s' }}></div>
      
      <div className={`absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl transition-all duration-1000 ${
        headerVisible ? 'animate-pulse opacity-100 scale-100' : 'opacity-0 scale-0'
      }`} style={{ transitionDelay: '1.5s', animationDelay: '1s' }}></div>
    </section>
  );
}