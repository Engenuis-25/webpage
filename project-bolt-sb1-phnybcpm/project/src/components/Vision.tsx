import React from 'react';
import { useInView } from '../hooks/useInView';
import { Eye } from 'lucide-react';

const Vision = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section id="vision" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div 
          ref={ref} 
          className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ease-out transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="md:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Vision"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-secondary-300/30"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-secondary-300 text-primary-500 w-10 h-10 flex items-center justify-center rounded-full mr-3">🔭</span>
              Vision Statement
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To become the most trusted partner for growth-driven businesses by delivering intelligent, 
              data-powered solutions that simplify complexity, optimize operations, and enable transformative impact.
            </p>
            <div className="bg-gradient-to-r from-primary-500/10 to-secondary-300/10 border-l-4 border-primary-500 p-4 rounded-r">
              <p className="italic text-primary-500">
                "We see a future where data empowers every decision, and complexity gives way to clarity."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;