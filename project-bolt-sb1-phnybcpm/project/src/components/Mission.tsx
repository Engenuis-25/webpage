import React from 'react';
import { useInView } from '../hooks/useInView';
import { Target } from 'lucide-react';

const Mission = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div 
          ref={ref} 
          className={`flex flex-col md:flex-row-reverse items-center gap-12 transition-all duration-1000 ease-out transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="md:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                alt="Mission"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-secondary-300/30"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-secondary-300 text-primary-500 w-10 h-10 flex items-center justify-center rounded-full mr-3">🎯</span>
              Mission Statement
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Engenuis, we empower organizations to decode data, deliver insight, and drive measurable outcomes. 
              Through a blend of analytics, strategic thinking, and agile execution, we help businesses streamline processes, 
              elevate decision-making, and unlock sustainable growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-primary-100 hover:border-primary-500 transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-primary-500 text-xl">1</span>
                </div>
                <h3 className="font-medium text-primary-500">Decode Data</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-primary-100 hover:border-primary-500 transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-primary-500 text-xl">2</span>
                </div>
                <h3 className="font-medium text-primary-500">Deliver Insight</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-primary-100 hover:border-primary-500 transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-primary-500 text-xl">3</span>
                </div>
                <h3 className="font-medium text-primary-500">Drive Outcomes</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;