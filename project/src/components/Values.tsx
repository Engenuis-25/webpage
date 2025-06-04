import React from 'react';
import { BarChart2, Users, Zap, Shield, BookOpen } from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Data-Driven Excellence",
      description: "We believe every decision should be backed by insight, not instinct. Accuracy, clarity, and impact guide our solutions."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client-Centric Innovation",
      description: "Our approach is tailored to the unique needs of each client. We innovate with purpose to solve real business challenges."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Agility with Accountability",
      description: "We move fast, adapt faster, and always stay accountable to results."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Integrity & Transparency",
      description: "We build long-term partnerships based on honesty, openness, and ethical practices."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Continuous Learning & Growth",
      description: "We foster a culture that thrives on curiosity, creativity, and constant improvement—for ourselves and our clients."
    }
  ];

  // Duplicate values for seamless carousel
  const duplicatedValues = [...values, ...values];

  return (
    <section id="values" className="py-20 bg-gradient-to-br from-primary-500 to-secondary-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center">
            <span className="bg-secondary-300 text-primary-500 w-10 h-10 flex items-center justify-center rounded-full mr-3">🧭</span>
            Core Values
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Our values define who we are and how we work. They guide our decisions, shape our culture, and drive our commitment to excellence.
          </p>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex animate-carousel">
            {duplicatedValues.map((value, index) => (
              <div 
                key={index}
                className="flex-none w-80 mx-4"
              >
                <div className="bg-white rounded-lg shadow-lg p-6 hover:transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-secondary-300 p-3 rounded-full text-primary-500 mr-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary-500">{value.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;